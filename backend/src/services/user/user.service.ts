import { User, IResponse } from "../../interface/";
import { createUser, existUserByNif, existUserByNameAndDob, deleteUser, getUserById, getAllUsers, updateUserById } from "./";

export class UserService {
  static async createUser(data: User.ParsedUser): Promise<IResponse<User.ResponseUser>> {
    return await createUser(data);
  }
  static async existUserByNif(nif: string): Promise<boolean> {
    return await existUserByNif(nif);
  }

  static async existUserByNameAndDob(name: string, dob: string): Promise<boolean> {
    return await existUserByNameAndDob(name, dob);
  }

  static async deleteUser(data: User.DeleteUser): Promise<IResponse<void>> {
    return await deleteUser(data);
  }

  static async getUserById(userId: string): Promise<IResponse<any>> {
    return await getUserById(userId);
  }

  static async getAllUsers(): Promise<IResponse<any>> {
    return await getAllUsers();
  }

  static async updateUserById(data:string): Promise<IResponse<any>> {
    return await updateUserById(data);
  }
}
