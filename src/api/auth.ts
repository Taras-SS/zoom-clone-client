import axios from "axios";
import { SERVER_URL } from "../config";

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp {
  name: string;
  surName: string;
  email: string;
  password: string;
}

export const signIn = (credentials: ISignIn) => {
  return axios.post(`${SERVER_URL}/api/signin`, credentials);
};

export const signUp = (credentials: ISignUp) => {
  return axios.post(`${SERVER_URL}/api/signup`, credentials);
};
