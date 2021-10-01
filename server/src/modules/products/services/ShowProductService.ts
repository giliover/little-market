import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IProductsRepository';
import User from '../infra/typeorm/entities/Product';

interface IRequest {
  user_id: string;
}

@injectable()
class ShowProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findByCode(user_id);
    if (!user) {
      throw new AppError('User not found');
    } else {
      return user;
    }
  }
}

export default ShowProfileService;
