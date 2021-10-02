import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateUserService from '@modules/users/services/CreateUserService';
import ShowProfileService from '@modules/users/services/ShowProfileService';
import User from '../../typeorm/entities/User';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, role, email, password } = request.body;
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({ name, email, role, password });

    return response.json(classToClass(user));
  }
  public async getUserById(
    request: Request,
    response: Response,
  ): Promise<User> {
    const { user_id } = <{ user_id: string }>request.headers;

    const showProfile = container.resolve(ShowProfileService);
    const user = await showProfile.execute({ user_id });
    return user;
  }
}
