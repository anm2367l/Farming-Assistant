import { SET_USER, SET_LOGGEDSTATUS, SET_EMAIL, SET_PASSWORD } from "./types";

export default (state, action) =>  {
  const { payload, type } = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    case SET_LOGGEDSTATUS:
      return {
        ...state,
        loggedStatus: payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: payload,
      };
    default: 
      return state;
  }
};
