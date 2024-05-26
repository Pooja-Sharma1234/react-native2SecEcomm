import {Alert} from 'react-native';
import {AuthActionType} from '../redux/AuthReducer';
import {Storage} from './Storage';

export class AuthRepo {
  static login(data) {
    return async dispatch => {
      try {
        if (data.email === '' || data.password === '') {
          throw new Error('fill all details');
        }
        dispatch({type: AuthActionType.Login_REQUEST});
        const users = await Storage.getUser();
        const findUser =
          users === null ? [] : users.filter(user => user.email === data.email);
        if (findUser.length === 0) {
          throw new Error('user does not exist');
        }
        Alert.alert('login success');
        Storage.setToken({
          ...findUser[0],
          token: 'token',
        });
        dispatch({
          type: AuthActionType.Login_REQUEST_SUCCESS,
          payload: {
            ...findUser[0],
            token: 'token',
          },
        });
      } catch (error) {
        Alert.alert(error.message);
        dispatch({
          type: AuthActionType.Login_REQUEST_FAILED,
        });
      }
    };
  }
  static updateUser(user) {
    return async dispatch => {
      try {
        dispatch({type: AuthActionType.UPDATE_USER, payload: {...user}});
      } catch {}
    };
  }
  static logout() {
    return async dispatch => {
      try {
        await Storage.clearToken();
        dispatch({type: AuthActionType.LOGOUT});
      } catch {}
    };
  }
  static signUp(userRegistration) {
    return async dispatch => {
      try {
        if (
          userRegistration.username.trim() === '' ||
          userRegistration.email.trim() === '' ||
          userRegistration.password.trim() === ''
        ) {
          throw new error('fill all details');
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userRegistration.email)) {
          throw new Error('Invalid email address');
        }

        // Validate password length
        if (userRegistration.password.length < 6) {
          throw new Error('Password must be at least 6 characters long');
        }
        const users = await Storage.getUser();

        if (users === null) {
          Storage.setUser([userRegistration]);
        } else {
          Storage.setUser([...users, userRegistration]);
        }
        Alert.alert('signup success');
      } catch (error) {
        Alert.alert(error.message);
      }
    };
  }
}
