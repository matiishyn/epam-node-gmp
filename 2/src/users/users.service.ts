import { v4 as uuid } from 'uuid';
import { User } from './users.interface';

let users: User[] = [
  {
    id: '1',
    login: 'ivan',
    age: 30,
    password: 'p@$$word',
    isDeleted: false,
  },
  {
    id: '6537bbb2-2cf6-475c-bfdb-e0f711922405',
    login: 'cindy',
    age: 25,
    password: 'p@$$word2',
    isDeleted: false,
  },
  {
    id: 'b66d8083-0d80-4f86-b37e-6bc406d61a51',
    login: 'kevin',
    age: 35,
    password: 'p@$$word3',
    isDeleted: false,
  },
  {
    id: '2c31487c-405b-4206-a6a3-f439bba78625',
    login: 'grag',
    age: 22,
    password: 'cool_password',
    isDeleted: false,
  },
];

// ===========================================

export const findAll = async (): Promise<User[]> => users || [];

export const find = async (id: string): Promise<User> => {
  const foundUser: User | undefined = users.find((u) => u.id === id);
  if (!foundUser) {
    throw new Error('No record found');
  }
  return foundUser;
};

export const create = async (newUser: User): Promise<void> => {
  const user: User = {
    ...newUser,
    id: uuid(),
  };
  users.push(user);
};

export const update = async (id: string, updatedUser: User): Promise<void> => {
  const userInd: number = users.findIndex((u) => u.id === id);
  const userToEdit = users[userInd];
  if (!userToEdit) {
    throw new Error('No record found to update');
  }
  const editedUser: User = {
    ...userToEdit, // todo shall I keep old data? Am I breaking Idempotency?
    ...updatedUser,
    id: userToEdit.id,
  };
  users = [...users.slice(0, userInd), editedUser, ...users.slice(userInd + 1)];
};

export const remove = async (id: string): Promise<void> => {
  const foundUser: User | undefined = users.find((u) => u.id === id);
  if (!foundUser) {
    throw new Error('No record found to delete');
  }
  users = users.filter((u) => u.id !== id);
};
