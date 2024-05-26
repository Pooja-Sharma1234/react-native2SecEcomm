import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cartrepo} from '../services/CartRepo';

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {cartItem} = useSelector(state => state.cart);
  const [counts, setCounts] = useState({});

  const handleIncrement = itemId => {
    setCounts({...counts, [itemId]: (counts[itemId] || 0) + 1});
  };

  const handleDecrement = itemId => {
    if (counts[itemId] > 0) {
      setCounts({...counts, [itemId]: counts[itemId] - 1});
    }
  };

  const handleRemove = id => {
    dispatch(Cartrepo.removeFromCart(id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Checkout</Text>
      </View>

      {cartItem?.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Image source={{uri: item.image}} style={styles.image} />
          <View style={styles.itemDetails}>
            <Text style={styles.itemTitle}>
              {item.title.length > 20
                ? item.title.substring(0, 20) + '...'
                : item.title}
            </Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => handleIncrement(item.id)}>
              <Icon name="add-circle-outline" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.quantity}>{counts[item.id] || 0}</Text>
            <TouchableOpacity onPress={() => handleDecrement(item.id)}>
              <Icon name="remove-circle-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => handleRemove(item.id)}
            style={styles.removeButton}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: '#0786DAFD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  removeButton: {
    marginLeft: 'auto',
  },
  removeText: {
    fontSize: 16,
    color: 'red',
  },
});

export default CartScreen;
