export interface User {
  id: number;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
}

export interface Users {
  [key: number]: User;
}
