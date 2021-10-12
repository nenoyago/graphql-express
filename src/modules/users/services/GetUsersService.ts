import { injectable } from 'tsyringe';
import User from '@models/User';

@injectable()
class GetUsersService {
  async execute() {
    const users = await User.find();

    return users;
  }
}

export { GetUsersService };
