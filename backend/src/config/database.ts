import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";
import { databaseConfig } from "./configurations";

const caCertPath = path.resolve(__dirname, "ca.pem");

const sequelize = new Sequelize(databaseConfig.database, databaseConfig.user, databaseConfig.password, {
  host: databaseConfig.host,
  port: databaseConfig.port,
  dialect: databaseConfig.dialect as any,
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: true,
      ca: fs.readFileSync(caCertPath).toString(),
    },
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Connected to the database and synchronized models");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  });

export { sequelize };
