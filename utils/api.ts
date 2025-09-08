import axios from "@/utils/axious.customize";
import { Platform } from "react-native";

export const registerAPI = (email: string, password: string, name: string) => {
  const url = `/api/v1/auth/register`;
  return axios.post<IBackendRes<IRegister>>(url, { email, password, name });
};

export const verifyCodeAPI = (email: string, code: string) => {
  const url = "/api/v1/auth/verify-code";
  return axios.post<IBackendRes<IRegister>>(url, {
    email,
    code,
  });
};

export const resendCodeAPI = (email: string) => {
  const url = "/api/v1/auth/verify-email";
  return axios.post<IBackendRes<IRegister>>(url, {
    email,
  });
};

export const loginAPI = (email: string, password: string) => {
  const url = `/api/v1/auth/login`;
  return axios.post<IBackendRes<IUserLogin>>(url, {
    username: email,
    password,
  });
};

export const getAccountAPI = () => {
  const url = `/api/v1/auth/account`;
  return axios.get<IBackendRes<IUserLogin>>(url);
};

export const getTopRestaurant = (ref: string) => {
  const url = `/api/v1/restaurants/${ref}`;
  return axios.post<IBackendRes<ITopRestaurant[]>>(url);
};

export const getURLBaseBackend = () => {
  const backend =
    Platform.OS === "android"
      ? process.env.EXPO_PUBLIC_API_URL
      : process.env.EXPO_PUBLIC_API_URL;

  return backend;
};

export const getRestaurantByIdAPI = (id: string) => {
  const url = `/api/v1/restaurants/${id}`;
  return axios.get<IBackendRes<IRestaurant>>(url);
};
