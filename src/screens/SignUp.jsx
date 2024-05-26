import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {AuthRepo} from '../services/AuthRepo';
import Icon from 'react-native-vector-icons/AntDesign';
import Email from 'react-native-vector-icons/Fontisto';
import Password from 'react-native-vector-icons/EvilIcons';

const SignUp = () => {
  const Navigation = useNavigation();
  const dispatch = useDispatch();
  const [userRegistration, setUserRegistration] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    dispatch(AuthRepo.logout());
  }, []);
  const handleInput = (fId_name, value) => {
    console.log(userRegistration, 'user');
    setUserRegistration({...userRegistration, [fId_name]: value});
  };
  const handleSubmit = async () => {
    dispatch(AuthRepo.signUp(userRegistration));
  };
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          marginTop: 60,
          alignSelf: 'center',
          fontSize: 34,
          fontWeight: '600',
          color: '#000',
        }}>
        SignUp
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
        <Icon name="user" size={30} style={{marginRight: 10}} />
        <TextInput
          placeholder="Enter Name here"
          style={{
            flex: 1,
            fontSize: 20,
            height: 50,
          }}
          value={userRegistration.username}
          onChangeText={value => handleInput('username', value)}
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
        <Email name="email" size={30} style={{marginRight: 10}} />
        <TextInput
          placeholder="Enter Email here"
          style={{
            flex: 1,
            fontSize: 20,
            height: 50,
          }}
          value={userRegistration.email}
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
          value={userRegistration.password}
          onChangeText={value => handleInput('password', value)}
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            marginTop: 100,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              color: 'black',
              borderColor: '#000',
              height: 50,

              marginLeft: '5%',
            }}>
            SignUp
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              color: 'blue',
              textDecorationLine: 'underline',
            }}
            onPress={() => {
              Navigation.navigate('Login');
            }}>
            Already have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUp;
