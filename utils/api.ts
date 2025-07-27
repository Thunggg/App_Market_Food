import axios from "@/utils/axious.customize";

export const registerAPI = (
  email: string,
  password: string,
  fullName: string
) => {
  const url = `/api/v1/auth/register`;
  return axios.post<IBackendRes<IRegister>>(url, { email, password, fullName });
};

export const verifyCodeAPI = (email: string, code: string) => {
  const url = "/api/v1/auth/verify-code";
  return axios.post<IBackendRes<IRegister>>(url, {
    email,
    code,
  });
};
