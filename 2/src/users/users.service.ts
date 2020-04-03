import { User, Users } from './users.interface';

const users: Users = {
  1: {
    id: 1,
    login: 'ivan',
    age: 30,
    password: 'p@$$word',
    isDeleted: false,
  },
  2: {
    id: 2,
    login: 'cindy',
    age: 25,
    password: 'p@$$word2',
    isDeleted: false,
  },
  3: {
    id: 3,
    login: 'kevin',
    age: 35,
    password: 'p@$$word3',
    isDeleted: false,
  },
};

export const findAll = async (): Promise<Users> => {
  return users;
};

export const find = async (id: number): Promise<User> => {
  const record: User = users[id];
  if (record) {
    return record;
  }
  throw new Error('No record found');
};

export const create = async (newUser: User): Promise<void> => {
  const id = new Date().valueOf(); // todo use uuid
  users[id] = {
    ...newUser,
    id,
  };
};

export const update = async (updatedUser: User): Promise<void> => {
  if (users[updatedUser.id]) {
    users[updatedUser.id] = updatedUser;
    return;
  }
  throw new Error('No record found to update');
};

export const remove = async (id: number): Promise<void> => {
  const record: User = users[id];
  if (record) {
    delete users[id];
    return;
  }
  throw new Error('No record found to delete');
};
