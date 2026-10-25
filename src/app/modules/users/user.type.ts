import { UserRole } from "../../../../generated/prisma/enums";

export interface RegisterUserPayload {
  name: string;
  email: string;
  password: string;
}
export interface IUser {
  userId: string;
  email: string;
  name: string;
  role: UserRole;
}
