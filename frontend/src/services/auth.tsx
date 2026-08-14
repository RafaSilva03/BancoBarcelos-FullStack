import { LoginCredentials, TokenResponse } from "../types/auth.interface";
import axios, { AxiosResponse } from "axios";

export const login = async (credentials: LoginCredentials): Promise<AxiosResponse<TokenResponse>> => {
  try {
    const response = await axios.post<TokenResponse>("http://localhost:3000/api/v1/auth/", credentials);
    return response;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Invalid credentials");
    } else {
      throw error; 
    }
  }
};
