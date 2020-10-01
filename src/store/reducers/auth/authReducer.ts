import {
  AUTH_LOADING,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
} from "../../types/auth";

import { AuthAction, AuthState } from "./types";

const initialState: AuthState = {
  loading: false,
  user: null,
};

export default function (state = initialState, action: AuthAction) {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
