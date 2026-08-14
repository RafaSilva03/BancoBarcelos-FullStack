interface LoginCredentials {
  nif: string;
  password: string;
}

interface TokenResponse {
  token: string;
}

export { LoginCredentials, TokenResponse };
