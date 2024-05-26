const initialState = {
  WishListItem: [],
};
export const WishListActionType = {
  ADD_TO_WISHLIST: 'add to Wishlist',
};
export const WishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add to Wishlist': {
      return {
        ...state,
        WishListItem: [...state.WishListItem, action.payload],
      };
    }
    case 'remove from Wishlist': {
      //yha remove from h vha remove to nhi
      console.log(action.payload, 'from reducer');
      return {
        ...state,
        WishListItem: state.WishListItem.filter(i => i.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};
