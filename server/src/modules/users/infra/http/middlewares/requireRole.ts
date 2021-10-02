import { Request, Response, NextFunction } from 'express';
import AppError from '@shared/errors/AppError';
import UsersController from '../controllers/UsersController';

const usersController = new UsersController();

export function requireRole(roles: string[]): any[] {
  return [
    async (request: Request, response: Response, next: NextFunction) => {
      const { ...user } = await usersController.getUserById(request, response);

      if (
        !user.role ||
        (roles.length && !roles.includes(user.role.toString()))
      ) {
        throw new AppError('Unauthorized', 401);
      }

      next();
    },
  ];
}
