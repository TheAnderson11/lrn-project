export interface IAuth {
  email: string;
  password: string;
  token: string | null;
}

export interface IAuthFull extends IAuth {
  firstName: string;
  userName: string;
}
