export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
}

export interface Account {
  provider: string;
  type: string;
  providerAccountId: string;
  access_token: string;
  expires_at: number;
  scope: string;
  token_type: string;
  id_token: string;
}
