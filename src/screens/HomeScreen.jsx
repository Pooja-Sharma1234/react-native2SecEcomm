import {Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import Header from './Header';
import DataRepo from '../services/DataRepo';
import {useState} from 'react';
import DataScreen from './DataScreen';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Header />
      <DataScreen />
    </View>
  );
};
export default HomeScreen;
//

//{/* <ImageBackground
// style={{flex: 1}}
// source={require('../assets/autumn.jpg')}>
//
// <View>
//   <Header />
// </View>
// </ImageBackground> */}
