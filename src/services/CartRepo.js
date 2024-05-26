import {Alert} from 'react-native';

export class Cartrepo {
  static addToCart(item) {
    return async dispatch => {
      try {
        dispatch({type: 'add to cart', payload: item});
      } catch (error) {
        Alert.alert(error.message);
      }
    };
  }
  static removeFromCart(id) {
    return async dispatch => {
      try {
        dispatch({type: 'remove from cart', payload: id});
      } catch (error) {
        Alert.alert(error.message);
      }
    };
  }
}
