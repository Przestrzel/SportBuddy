import { ModelWithId } from "../../../types/common";

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  rePassword: string;
  username: string;
}

export interface User extends ModelWithId {
  email: string;
  fullName: string;
  username: string;
}

export interface AccessToken {
  accessToken: string;
}

export interface UserWithAccessToken extends User, AccessToken {}
