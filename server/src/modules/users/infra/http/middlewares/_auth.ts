import ensureAuthenticated from './ensureAuthenticated';
import { requireRole } from './requireRole';

export default function _auth(roles: string[]): any[] {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return [ensureAuthenticated, requireRole(roles)];
}
