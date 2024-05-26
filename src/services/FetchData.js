import {fetchDataFailure, fetchDataRequest, fetchDataSuccess} from './DataRepo';

export const FetchData = () => {
  return async dispatch => {
    dispatch(fetchDataRequest());
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

//ab jaha pr fetchdata call kr ahin hian ab waha yeah call krn ahain
//to agar vo nhi likhege toh yha fetchdaat request ,successs y sb to btana pdega na kha gye

//yeah wala paka repo ka code hain
//yha y vala dekho thik h ki idhr udhr kuch ulta pulta to ni likha na
//haan aur yeah sahi hain
//ki kha kha kya likhna h rukiye abhi clear karenge issue wahi important bhihain
