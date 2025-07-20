import axios from "@/utils/axious.customize";

export const registerAPI = (
  email: string,
  password: string,
  fullName: string
) => {
  const url = `/api/v1/auth/register`;
  return axios.post(url, { email, password, fullName });
};
