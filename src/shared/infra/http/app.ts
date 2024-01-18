import "reflect-metadata";
require("dotenv").config();
import express from "express";
import { NextFunction, Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import { CelebrateError } from 'celebrate';
import swaggerUI from 'swagger-ui-express';

import { AppError } from "../../errors/AppError";
import { cronn } from "~/config/database/croon";
const app = express();
import "~/shared/infra/continer";

import swaggerFile from "../../../swagger.json";
import { router } from "./router";

cronn();

app.use(
  cors({
    origin: [],
  }),
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use('/v1', router);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    if (err instanceof CelebrateError) {
      const errorBody = err.details.get('body');
      return response.status(400).json({
        message: errorBody?.details[0].message,
      });
    }

    return response.status(500).json({
      status: "error",
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      message: `Internal server error - ${err.message!}`,
    });
  },
);

export default app;
