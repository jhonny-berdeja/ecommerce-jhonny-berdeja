import { NextFunction } from 'express';

export function loggerGlobal(req: Request, res: Response, next: NextFunction) {
  console.log(
    `Method: ${req.method} Route: ${req.url} Date: ${new Date().toString()}`,
  );
  next();
}
