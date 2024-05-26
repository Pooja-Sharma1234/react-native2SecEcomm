const initialState = {
  name: 'test',
  isLoggedIn: false,
};
export const AuthActionType = {
  Login_REQUEST: 'login request',
  Login_REQUEST_SUCCESS: 'login request success',
  Login_REQUEST_FAILED: 'login request failed',
  UPDATE_USER: 'update user',
  LOGOUT: 'logout',
};
export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionType.Login_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
      };
    case AuthActionType.UPDATE_USER:
    case AuthActionType.Login_REQUEST_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    case AuthActionType.Login_REQUEST_FAILED:
      return {
        ...initialState,
      };
    case AuthActionType.LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
