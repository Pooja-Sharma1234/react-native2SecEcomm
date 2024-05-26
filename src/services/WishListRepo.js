export class WishlistRepo {
  static addToWishlist(item) {
    return async dispatch => {
      try {
        dispatch({type: 'add to Wishlist', payload: item});
      } catch (error) {
        console.log(error.message);
      }
    };
  }
  static removeWishlist(id) {
    return async dispatch => {
      try {
        dispatch({type: 'remove from Wishlist', payload: id});
      } catch (error) {
        console.log(error.message);
      }  //hang nhi khul rha hogya kya mtlb nhi nhi vo dusra project tha ha battery gyi iski ha are shalu use kr rhi thi usko mne bola h ki chrg lga k kam kiys kr but sunti nhi or mujhe y low btry vala de deti h
      //aap so jate ho kl ka bhrosa nhi to m to jg rhi thi aapne 1:45 p kiya tha to phir aap so rh the na m thodi 
    };
  }
}
