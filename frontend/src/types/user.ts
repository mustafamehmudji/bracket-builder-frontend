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
  firstName: string;
  lastName: string;
  email: string;
  type: string;
}
