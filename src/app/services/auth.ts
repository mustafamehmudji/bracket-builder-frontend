import { AxiosHeaders, AxiosResponse } from "axios";
import ax, { APIResponse } from "../../lib/axios";
import { endpoints } from "../../lib/constants";
import { ILoginBody, ISignupBody } from "../../types/auth";
import { IUser } from "../../types/user";

export const fetchSignup = async (
  data: ISignupBody
): Promise<AxiosResponse<APIResponse<IUser>>> => {
  return await ax({
    method: "post",
    url: endpoints.signup,
    data,
  });
};

export const fetchLogin = async (
  data: ILoginBody
): Promise<AxiosResponse<APIResponse<IUser>>> => {
  return {
    data: {
      status: true,
      message: "User logged in",
      data: {
        _id: "hjdsavfbjdsaf",
        first_name: "sdfdsafsdf",
        last_name: "dsafgsdf",
        email: "abksdj@gmail.com",
        type: "customer",
      },
    },
    status: 200,
    statusText: "OK",
    headers: {},
    config: {
      headers: {} as AxiosHeaders,
    },
  };

  return await ax({
    method: "post",
    url: endpoints.login,
    data,
  });
};

export const fetchLogout = async (): Promise<
  AxiosResponse<APIResponse<any>>
> => {
  return {
    data: {
      status: true,
      message: "User logged out",
      data: null,
    },
    status: 200,
    statusText: "OK",
    headers: {},
    config: {
      headers: {} as AxiosHeaders,
    },
  };

  return await ax({
    method: "post",
    url: endpoints.logout,
  });
};
