import { User } from "../../../models/user";
import {
  AUTH_LOADING,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
} from "../../types/auth";

export interface AuthState {
  loading: boolean;
  user: null | User;
}

interface AuthLoadingAction {
  type: typeof AUTH_LOADING;
}

interface SignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS;
  payload: User;
}

interface SignInFail {
  type: typeof SIGN_IN_FAIL;
}

interface SignUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS;
}

interface SignUpFail {
  type: typeof SIGN_UP_FAIL;
}

export type AuthAction =
  | AuthLoadingAction
  | SignInSuccessAction
  | SignInFail
  | SignUpSuccessAction
  | SignUpFail;
