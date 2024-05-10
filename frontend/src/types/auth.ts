export interface ILoginBody {
  email: string;
  password: string;
}

export interface ILoginResponse {
  jwt: string;
  message: string;
}

export interface ISignupBody {
  firstName: string;
  lastName: string;
  email: string;
  // username: string;
  password: string;
}
