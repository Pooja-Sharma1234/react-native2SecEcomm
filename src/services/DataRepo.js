// export const fetchDataRequest = () => ();

// export const fetchDataSuccess = data => ();

// export const fetchDataFailure = error => ();
//y alag alag kiya sath bhi kr skte h? haan sath bhi kr sakten

//yeah sare action action hain toh isse yaha nahi likhnge aur iski jaruat bhi nahi yeah wala bhi hun repo main kr lenge
//achahaan

//dekhoye code likhne bahut traike hoten but hum class ko follow kr e likhnege issue hum el pro way main chenge acha
//to isko kse change kre   haan issi ko karenge class main

//bas itna hi tha
//yeah call krna hain DataRe.getData()
export class DataRepo {
  static getData() {
    return async dispatch => {
      dispatch({
        type: 'FETCH_DATA_REQUEST',
      });
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        dispatch({
          type: 'FETCH_DATA_SUCCESS',
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: 'FETCH_DATA_FAILURE',
          payload: error.message,
        });
      }
    };
  }
}
