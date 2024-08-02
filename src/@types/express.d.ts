import { User } from '../entities/CreateUser';

declare global {
	namespace Express {
		export interface Request {
			user: Partial<User>
		}
	}
}
