export type UserDto = {
  id?: number;
  email: string;
  name: string;
  password: string;
  createdAt?: Date;
};

export type CreateUserDto = Omit<UserDto, 'id' | 'createdAt'>;
