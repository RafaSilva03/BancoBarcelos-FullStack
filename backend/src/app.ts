import express, { Express } from "express";
import cors from "cors";
import { morganConf } from "./config/morganConf";
import { appConfig, corsOptions } from "./config/configurations";
import { sequelize } from "./config/database";
import { errorHandler } from "./errors/errorHandler";
import * as route from "./routes";
import { initModels } from "./models/init-models";
import { RecurringTransferController } from "./controllers/recurringTransfer/recurringTransfer.controller";


const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(cors(corsOptions));
morganConf(app);

app.use(express.urlencoded({ extended: true }));

initModels(sequelize);

sequelize
  .authenticate()
  .then(async () => {
    app.listen(appConfig.port, () => {
      console.log(`Server is running on port ${appConfig.port}`);
    });
    RecurringTransferController.searchRecurringTransfer();
  })
  .catch((error: any) => {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  });

app.use(`${appConfig.pathPrefix}/info`, route.info);
app.use(`${appConfig.pathPrefix}/user`, route.user);
app.use(`${appConfig.pathPrefix}/bankAccount`, route.bankAccount);
app.use(`${appConfig.pathPrefix}/insurance`, route.insurance);
app.use(`${appConfig.pathPrefix}/loanCredit`, route.loanCredit);
app.use(`${appConfig.pathPrefix}/card`, route.card);
app.use(`${appConfig.pathPrefix}/creditPayment`, route.creditPayment);
app.use(`${appConfig.pathPrefix}/recurringTransfer`, route.recurringTransfer);

app.use(`${appConfig.pathPrefix}/transfer`, route.transfer);
app.use(`${appConfig.pathPrefix}/auth`, route.auth);
app.use(`${appConfig.pathPrefix}/check`, route.checks); 
app.use(`${appConfig.pathPrefix}/generate`, route.generate);

app.use(errorHandler);

process.on("unhandledRejection", (error) =>  {
  console.error("Unhandled Promise rejection:", error);
  process.exit(1);
});

export { app };
