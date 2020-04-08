import { Op } from 'sequelize';
import User from '../models/user';

export default class UserController {
  static async getAll(): Promise<User[]> {
    return User.findAll();
  }

  static async getOne(id: string): Promise<User> {
    const user = await User.findOne({
      where: { id },
    });
    if (!user) {
      throw new Error('User is not found');
    }
    return user;
  }

  static async create(user: User): Promise<User> {
    return User.create(user);
  }

  static async update(id: string, user: User): Promise<number> {
    const [updated] = await User.update(user, {
      where: { id },
    });
    if (!updated) {
      throw new Error('User is not found');
    }
    return updated;
  }

  static async remove(id: string): Promise<number> {
    const [updated] = await User.update(
      { isDeleted: true },
      {
        where: { id },
      }
    );
    if (!updated) {
      throw new Error('User is not found');
    }
    return updated;
  }

  static async getAutoSuggestUsers(
    search: string,
    limit: number
  ): Promise<User[]> {
    console.log('YES');
    return User.findAll({
      where: {
        login: {
          [Op.substring]: search, // LIKE '%search%'
        },
      },
      limit,
      order: [['login', 'ASC']],
    });
  }
}
