import type { NextFunction, Request, Response } from 'express';

import logger from '../base-logger';

export const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const logObject = { err, req, headers: req.headers };

  if (err && err instanceof SyntaxError) {
    logger.warn(logObject, 'Bad Request');
    // Avoiding passing error to default express error handler here due to it logging the error again
    res.send(400);
  } else {
    logger.error(logObject, 'Critical Error');
    // Pass error to default express error handler so it can set status codes correctly
    next(err);
  }
};