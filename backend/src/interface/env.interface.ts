export interface IEnvConfig {
    DB_HOST: string;
    DB_PORT: string;
    DB_NAME: string;
    DB_USER: string;
    DB_PASSWORD: string;
    API_PORT: string;
    API_VERSION?: string;
    HOSTNAME?: string;
    PATH_PREFIX: string;
    JWT_SECRET_CODE: string; 
}
