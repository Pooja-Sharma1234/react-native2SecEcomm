import {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {AuthRepo} from '../services/AuthRepo';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Email from 'react-native-vector-icons/Fontisto';
import Password from 'react-native-vector-icons/EvilIcons';
export const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthRepo.logout());
  }, []);

  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });
  // useEffect(() => {
  //   dispatch(AuthRepo.logout);
  // });

  const handleInput = (f_id, value) => {
    setUserLogin({...userLogin, [f_id]: value});
  };
  const submithandler = () => {
    dispatch(AuthRepo.login({userLogin}));
  };

  return (
    <View>
      <Text
        style={{marginTop: 50, marginLeft: 130, fontSize: 40, color: '#000'}}>
        Login
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          borderRadius: 10,
          borderWidth: 0.5,
          marginTop: 120,
          width: '90%',
          marginLeft: 20,
        }}>
        <Email name="email" size={25} style={{marginRight: 10}} />
        <TextInput
          placeholder="Enter Email here"
          style={{
            flex: 1,
            fontSize: 20,
            height: 50,
          }}
          value={userLogin.email}
          onChangeText={value => handleInput('email', value)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          borderRadius: 10,
          borderWidth: 0.5,
          marginTop: 20,
          width: '90%',
          marginLeft: 20,
        }}>
        <Password name="lock" size={35} style={{marginRight: 10}} />
        <TextInput
          placeholder="Enter Password here"
          style={{
            flex: 1,
            fontSize: 20,
            height: 50,
          }}
          value={userLogin.password}
          onChangeText={value => handleInput('password', value)}
        />
      </View>
      <TouchableOpacity
        onPress={submithandler}
        style={{
          marginTop: 100,
          marginLeft: 140,
          fontSize: 40,
          color: '#000',
          borderWidth: 2,
          borderRadius: 15,
          width: '30%',
          height: 50,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            alignItems: 'center',
            marginLeft: 20,
            fontSize: 30,
            color: '#000',
          }}>
          Login
        </Text>
        <Text
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          style={{marginTop: 20, width: 150, fontSize: 20}}>
          Not Registered?
        </Text>
      </TouchableOpacity>
    </View>
  );
};
