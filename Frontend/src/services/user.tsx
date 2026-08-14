import axios, { AxiosResponse } from "axios";

export const getUserData = async (): Promise<AxiosResponse<any>> => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("Token not found in local storage");
    }

    const response = await axios.get<any>("http://localhost:3000/api/v1/user/data", {
      headers: {
        Authorization: token,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
