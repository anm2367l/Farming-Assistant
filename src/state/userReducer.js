import { SET_USER, SET_LOGGEDSTATUS, SET_EMAIL, SET_PASSWORD, SET_SUB_PAGE, SET_CULTIVO, SET_NOMBRE, SET_TIPO_CULTIVO, SET_AREA_SEMBRADA, SET_DESCRIPCION } from "./types";

export default (state, action) => {
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
    case SET_SUB_PAGE:
      return {
        ...state,
        sub_page: payload,
      };
    case SET_CULTIVO:
      return {
        ...state,
        cultivo: payload,
      };
    case SET_NOMBRE:
      return {
        ...state,
        cultivo: payload,
      };
    case SET_AREA_SEMBRADA:
      return {
        ...state,
        cultivo: payload,
      };
    case SET_TIPO_CULTIVO:
      return {
        ...state,
        cultivo: payload,
      };

    case SET_DESCRIPCION:
      return {
        ...state,
        cultivo: payload,
      };

    default:
      return state;
  }
};
