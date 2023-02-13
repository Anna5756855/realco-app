import { authAPI } from "../api/api";

const SET_LOGIN_DATA = "SET_LOGIN_DATA";

let initialState = {
  username: "",
  password: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

//Action Creator
const setLoginData = (username, password) => ({
  type: SET_LOGIN_DATA,
  payload: { username, password },
});

//Thunk Creator
const loginThunk = (username, password) => async (dispatch) => {
  await authAPI.login(username, password);
  dispatch(setLoginData(username, password));
};

export default AuthReducer;

export { setLoginData, loginThunk };

