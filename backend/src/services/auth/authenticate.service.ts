import { User, IResponse } from "../../interface/";
import { ValidationError, CustomError } from "../../errors/";
import Bcrypt from "../../bcrypt/bcrypt.hash";
import { user } from "../../models/user";
import { status } from "../../models/status";
import { genereateToken } from "../../middleware/auth.middleware";

interface AuthReturn {
  id: string;
  nif: string;
  hashed_password?: string;
}

export const authenticate = async (data: any): Promise<IResponse<string>> => {
  try {
    const { nif, password } = data;
    const accountStatus = await getAccountStatus(nif);

    if (accountStatus === "closed") {
      return {
        status: "error",
        code: 403,
        description: "Authentication failed. The account is closed.",
      };
    }

    const authData = await getAuthData(nif, password);

    if (!authData) {
      return {
        status: "error",
        code: 401,
        description: "Invalid credentials",
      };
    }

    const token = genereateToken({ userId: authData.id });

    return {
      status: "success",
      code: 200,
      description: "Authentication successful.",
      data: {
        token: `Bearer ${token}`,
      },
    };
  } catch (error: any) {
    throw new CustomError("AUTH_FAILED", `Authentication failed: ${error.message}`);
  }
};

const getAccountStatus = async (nif: string): Promise<string> => {
  try {
    const userData = await user.findOne({
      where: { nif: nif },
      include: [{ model: status, as: "status", attributes: ["status"] }],
    });

    if (userData) {
      return userData.status.status;
    }

    return "closed";
  } catch (error) {
    throw new Error("Error retrieving account status");
  }
};

const getAuthData = async (nif: string, password: string): Promise<AuthReturn | null> => {
  const userData = await user.findOne({
    where: {
      nif: nif,
    },
    attributes: ["id", "nif", "hashed_password"],
  });

  if (!userData) {
    return null;
  }

  const comparePasswords = await Bcrypt.comparePasswords(password, userData.hashed_password);

  const obj = userData.toJSON() as AuthReturn;

  delete obj.hashed_password;

  if (comparePasswords) {
    return obj;
  } else {
    return null;
  }
};
