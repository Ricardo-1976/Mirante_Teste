import 'reflect-metadata';
require('dotenv').config();
import express from 'express';
import { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';

import { AppError } from '../../errors/AppError';
const app = express();

app.use(
  cors({
    origin: [],
  }),
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    message: `Internal server error - ${err.message!}`,
  });
});

export default app;
