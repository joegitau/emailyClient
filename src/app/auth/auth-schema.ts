export interface UsernameRes {
  available: boolean;
}

export interface SignupCreds {
  username: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignupRes {
  username: string;
}

export interface SignedinRes {
  authenticated: boolean;
  username: string;
}
