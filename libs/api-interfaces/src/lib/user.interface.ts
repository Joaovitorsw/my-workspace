export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}
export interface SignUpResponse extends Omit<SignUpRequest, 'password'> {
  userID: number;
}

export type SignInRequest = Omit<SignUpRequest, 'name'>;
export interface TokenResponse {
  accessToken: string;
}
