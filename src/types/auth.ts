export interface ILoginBody {
  email: string;
  password: string;
}

export interface ISignupBody {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  dob: string;
  gender: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  password: string;
}
