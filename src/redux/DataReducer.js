const initialState = {
  loading: false,
  data: [],
  error: null,
};

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default DataReducer;
//haan yeahbhi sahi hain
//oh oh samj ane laga hain tj ko v mne help bhi li h sb kuch kudh se nhi kiya or mujhe na confusion hoti h  repo vale portion m
