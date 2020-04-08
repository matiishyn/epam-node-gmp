import User from '../models/user';

export default class UserController {
  static async getAll() {
    return User.findAll();
  }

  static async getOne(id: string) {
    const user = await User.findOne({
      where: { id },
    });
    if (!user) {
      throw new Error('User is not found');
    }
    return user;
  }

  static async create(user: User) {
    return User.create(user);
  }

  static async update(id: string, user: User) {
    const [updated] = await User.update(user, {
      where: { id },
    });
    if (!updated) {
      throw new Error('User is not found');
    }
    return updated;
  }

  static async remove(id: string) {
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
}
