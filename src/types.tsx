export interface AUser {
  id: number
  name: string
  email: string
  password: string
  identity: string
}

export interface ICurrent {
  isAuthenticated: boolean | null;
  user: AUser;
}