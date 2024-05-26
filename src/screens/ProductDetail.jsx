import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useDispatch, useSelector} from 'react-redux';
import {Cartrepo} from '../services/CartRepo';
import {WishlistRepo} from '../services/WishListRepo';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const {WishListItem} = useSelector(state => state.wish);

  const addTocartHnadler = () => {
    dispatch(Cartrepo.addToCart(route?.params?.data));
  };
  const toggletoWishlist = () => {
    const toggle = WishListItem.some(i => i?.id == route?.params?.data?.id);

    console.log(route?.params?.data.id, 'ggg');
    if (toggle) {
      dispatch(WishlistRepo.removeWishlist(route?.params?.data.id));
    } else {
      dispatch(WishlistRepo.addToWishlist(route?.params?.data));
    }
  };
  //
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#0786DAFD',
            height: 70,
          }}>
          <Icon
            name="arrowleft"
            size={30}
            style={{marginTop: 20, marginLeft: 10}}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={{fontSize: 20, marginTop: 20, marginLeft: 90}}>
            Product Details
          </Text>
        </View>
      </TouchableOpacity>
      <Image source={{uri: route.params.data.image}} style={styles.banner} />
      <TouchableOpacity style={styles.WishListBtn} onPress={toggletoWishlist}>
        <Icon
          name="heart"
          size={50}
          color={
            WishListItem.some(i => i?.id == route?.params?.data?.id)
              ? 'red'
              : 'grey'
          }
        />
      </TouchableOpacity>
      <Text style={styles.title}>{route.params.data.title}</Text>
      <Text style={styles.desc}>{route.params.data.description}</Text>
      <Text style={styles.price}>
        {'Price:' + ' $' + route.params.data.price}
      </Text>
      <TouchableOpacity style={styles.btn} onPress={addTocartHnadler}>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 10,
            fontSize: 20,
            fontWeight: 500,
            color: '#000',
          }}>
          Add To Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetail;
const styles = StyleSheet.create({
  banner: {
    marginTop: 30,
    height: 250,
    width: '60%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    color: '#000',
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: '600',
  },
  desc: {
    fontSize: 16,
    color: '#000',
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: '500',
    alignSelf: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  price: {
    fontSize: 20,
    color: '#000',
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: '600',
  },
  btn: {
    width: '80%',
    height: 50,
    backgroundColor: 'orange',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
  WishListBtn: {
    backgroundColor: '#fff',
    position: 'absolute',
    right: 20,
    bottom: 550,

    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
  },
});
