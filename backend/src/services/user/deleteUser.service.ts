import { StatusService } from "../status/status.service";
import { User, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";
import { user } from "../../models/user";

export const deleteUser = async (data: User.DeleteUser): Promise<IResponse<void>> => {
  try {
    const existingUser = await user.findOne({ where: { id: data.id } });
    if (!existingUser) {
      return { code: 404, status: "error", details: "User not found" } as IResponse<void>;
    }

    const existStatusId = await StatusService.existStatusById(data.statusId);
    if (!existStatusId) {
      return { code: 404, status: "error", details: "Invalid status ID" } as IResponse<void>;
    }

    const result = await user.update({ status_id: data.statusId }, { where: { id: data.id } });

   
    if (result[0] === 0) {
      return { code: 500, status: "error", details: "Failed to update user status" } as IResponse<void>;
    }

    return { code: 200, status: "success", details: "User deleted successfully" } as IResponse<void>;
  } catch (error: any) {
    throw new CustomError("UPDATE_USER_STATUS_FAILED", `Failed to update user status: ${error.message}`);
  }
};
