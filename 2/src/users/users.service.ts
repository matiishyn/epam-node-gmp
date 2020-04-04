import { v4 as uuid } from 'uuid';
import { User } from './users.interface';

interface IUsersService {
  findAll(): Promise<User[]>;
  findOne(id: string): Promise<User>;
  create(newUser: User): Promise<void>;
  update(id: string, updatedUser: User): Promise<void>;
  remove(id: string): Promise<void>;
}

class UsersService implements IUsersService {
  private users: User[] = [
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

  private replaceUser(ind: number, user: User): void {
    this.users = [
      ...this.users.slice(0, ind),
      user,
      ...this.users.slice(ind + 1),
    ];
  }

  public findAll = async (): Promise<User[]> => this.users || [];

  public findOne = async (id: string): Promise<User> => {
    const foundUser: User | undefined = this.users.find((u) => u.id === id);
    if (!foundUser) {
      throw new Error('No record found');
    }
    return foundUser;
  };

  public create = async (newUser: User): Promise<void> => {
    const user: User = {
      ...newUser,
      id: uuid(),
    };
    this.users.push(user);
  };

  public update = async (id: string, updatedUser: User): Promise<void> => {
    const userInd: number = this.users.findIndex((u) => u.id === id);
    const userToEdit = this.users[userInd];
    if (!userToEdit) {
      throw new Error('No record found to update');
    }
    const editedUser: User = {
      ...userToEdit, // todo shall I keep old data? Am I breaking Idempotency?
      ...updatedUser,
      id: userToEdit.id,
    };
    this.replaceUser(userInd, editedUser);
  };

  public remove = async (id: string): Promise<void> => {
    const userInd: number = this.users.findIndex((u) => u.id === id);
    const userToEdit = this.users[userInd];
    if (!userToEdit) {
      throw new Error('No record found to delete');
    }
    const editedUser: User = {
      ...userToEdit,
      isDeleted: true,
    };
    this.replaceUser(userInd, editedUser);
  };
}

const users = new UsersService();
export default users;
