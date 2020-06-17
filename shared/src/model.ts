export interface User {
  id: string;
  isOnline: boolean;
}

export interface Model {
  users: User[];
}
