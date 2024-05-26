const initialState = {
  cartItem: [],
};
export const CartActionType = () => {
  ADD_TO_CART: 'add to cart';
};
export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add to cart':
      console.log(action.payload, 'action.payload');
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };
    case 'remove from cart':
      return {
        ...state,
        cartItem: state.cartItem.filter(i => i.id !== action.payload),
      };
    default:
      return state;
  }
};
