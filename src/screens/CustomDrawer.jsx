import {Text, TouchableOpacity, View} from 'react-native';

const CustomDrawer = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'blue',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SearchScreen');
        }}>
        <Text
          style={{
            borderWidth: 2,
            height: 50,
            fontSize: 25,
            backgroundColor: 'skyblue',
            color: 'black',
            textAlign: 'center',
          }}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SearchScreen');
        }}>
        <Text
          style={{
            borderWidth: 2,
            height: 50,
            fontSize: 25,
            backgroundColor: 'skyblue',
            color: 'black',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SearchScreen');
        }}>
        <Text
          style={{
            borderWidth: 2,
            height: 50,
            fontSize: 25,
            backgroundColor: 'skyblue',
            color: 'black',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <Text
          style={{
            borderWidth: 2,
            height: 50,
            fontSize: 25,
            backgroundColor: 'skyblue',
            color: 'black',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomDrawer;
