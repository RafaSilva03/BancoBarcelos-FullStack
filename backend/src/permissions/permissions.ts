import { privileges } from "../models/privileges";
import { user_privileges } from "../models/user_privileges";
import { CustomError } from "../errors/customError";
import { Request, Response, NextFunction } from "express";
import { getTokenData, getToken } from "../middleware/auth.middleware";


const checkAuthorization = async (req: Request, res: Response, next: NextFunction, permissionsNeeded: string[]) => {
  const token = getToken(req);
  const tokenData = getTokenData(token);

  try {
    const userPrivileges = await user_privileges.findAll({
      where: { user_id: tokenData.userId },
      include: [{ model: privileges, as: "privilege", attributes: ["privilege"] }],
    });

    const userPrivilegesArray = userPrivileges.map((userPrivilege) => userPrivilege.privilege.privilege);
    if (userHasPermission(userPrivilegesArray, permissionsNeeded)) {
      next();
    } else {
      throw new CustomError("INVALID_PERMISSIONS", "INVALID PERMS", 404);
    }
  } catch (error) {
    next(error);
  }
};

const userHasPermission = (permissions: string[], permissionsNeeded: string[]): boolean => {
  for (const permNeed of permissionsNeeded) {
    for (const perm of permissions) {
      if (perm === permNeed) {
        return true;
      }
    }
  }
  return false;
};

export { checkAuthorization };
