import {
  AUTH_LOADING,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
} from "../types/auth";
import { signUp as registration, signIn as login } from "../../api/auth";
import { AppThunk } from "../index";
import { ISignUp, ISignIn } from "../../api/auth";

export const signUp = (
  credential: ISignUp
): AppThunk<Promise<any | { err: any }>> => async (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  try {
    await registration(credential);
    dispatch({ type: SIGN_UP_SUCCESS });
  } catch (err) {
    dispatch({ type: SIGN_UP_FAIL });
    return { err: err.response.data };
  }
};

export const signIn = (
  credential: ISignIn
): AppThunk<Promise<any | { err: any }>> => async (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  try {
    const { data, headers } = await login(credential);
    localStorage.setItem("Access-Token", headers["access-token"]);
    localStorage.setItem("User", JSON.stringify(data));
    dispatch({ type: SIGN_IN_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: SIGN_IN_FAIL });
    return { err: err.response.data };
  }
};
