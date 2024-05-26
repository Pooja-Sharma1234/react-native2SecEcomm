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

//use Datarepo not this
