import { AppDataSource } from "../data-source";
import { User } from "../entities/CreateUser";

export const userRepository = AppDataSource.getRepository(User)