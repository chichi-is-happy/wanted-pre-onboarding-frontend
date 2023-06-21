export interface SignProp {
  email: string;
  password: string;
}
export interface SignApiResponse {
  status: number;
  errorMessage?: string;
  data?: {
    access_token: string;
  };
}
