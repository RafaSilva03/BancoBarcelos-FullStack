import dotenv from "dotenv";
import cors from "cors";
import {IEnvConfig} from "../interface/"
dotenv.config();


const envConfig: IEnvConfig = dotenv.config().parsed as IEnvConfig;

interface IDbConfig {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
    ssl?: boolean;
    dialect: string | undefined; 
}

interface AppConfig {
    port: number;
    version?: string;
    host: string;
    pathPrefix?: string;
}


const jwtSecretCode: string = envConfig.JWT_SECRET_CODE;

const databaseConfig: IDbConfig = {
    host: envConfig.DB_HOST, 
    port: parseInt(envConfig.DB_PORT), 
    database: envConfig.DB_NAME,
    user: envConfig.DB_USER,
    password: envConfig.DB_PASSWORD, 
    ssl: false ,
    dialect: envConfig.DB_DIALECT
};

const appConfig: AppConfig = {
    port: parseInt(envConfig.API_PORT),
    version: envConfig.API_VERSION,
    host: envConfig.HOSTNAME || "localhost",
    pathPrefix: envConfig.PATH_PREFIX,
};

// Onde colocar o JWT_SECRET_CODE?
const allowedOrigins = ['http://localhost:3000'];

const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins
};

export { appConfig, databaseConfig, corsOptions, jwtSecretCode };