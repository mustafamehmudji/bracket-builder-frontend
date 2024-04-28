export enum UserType {
  customer = "customer",
  admin = "admin",
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface IUser {
  _id?: string;
  first_name: string;
  last_name: string;
  email: string;
  type: string;
}
