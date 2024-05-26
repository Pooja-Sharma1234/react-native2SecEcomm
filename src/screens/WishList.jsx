import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {WishlistRepo} from '../services/WishListRepo';

const WishListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {WishListItem} = useSelector(state => state.wish);

  const handleRemove = id => {
    dispatch(WishlistRepo.removeWishlist(id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={30}
          style={{marginRight: 130}}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.headerText}>Checkout</Text>
      </View>

      {WishListItem?.map(item => {
        return (
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

            <TouchableOpacity
              onPress={() => handleRemove(item.id)}
              style={styles.removeButton}>
              <Text style={styles.removeText}>Remove</Text> 
            </TouchableOpacity>
          </View>
        );
      })}
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    marginRight: 120,
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

export default WishListScreen;
