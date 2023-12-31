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
}

export interface User {
  email: string;
  firstName: string;
  lastName: string;
}
