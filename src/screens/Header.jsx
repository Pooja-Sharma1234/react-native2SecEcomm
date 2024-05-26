import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
const {height, width} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={30} style={{marginLeft: 10}} />
        </TouchableOpacity>

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>E-Commerce </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SearchScreen');
          }}>
          <AntDesign name="search1" size={30} style={{marginRight: 10}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#0786DAFD',
  },
});
