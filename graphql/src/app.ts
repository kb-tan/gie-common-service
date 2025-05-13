import * as http from 'http';
import {
  type ExpressContextFunctionArgument,
  expressMiddleware,
} from '@apollo/server/express4';
import type { KeyValueCache } from '@apollo/utils.keyvaluecache';
import cookieParser from 'cookie-parser';
// import cors from 'cors';
import express from 'express';
import { type Express } from 'express';
import { errorHandlerMiddleware } from './app/middleware';
// import { authMiddleware } from './auth/auth';
// import config from './config';
// import { isJest } from './config/jest';
import { schema } from './executable-schema';
// import logTimeoutsMiddleware from './log-timeouts';
// import { initOsMetrics } from './os-metrics-agents';
// import security from './security';
import { getApolloServer } from './server';
import { getDataSources } from './data-source';
// import { corsOptions } from 'config/cors-config';
// import { getContext } from 'context';
import type { Context, IRequestContext } from './types';

//TODO: move to another ts
export const getContext = ({
  req,
  res,
}: ExpressContextFunctionArgument): IRequestContext => {
  return {}
}

export const getExpressApp = () => {
  const app = express();
  app.use(cookieParser());
  app.use(express.json());

//   app.set('trust proxy', true);
//   app.use(logTimeoutsMiddleware());
//   app.use(authMiddleware(config));
//   app.use(cors(corsOptions));

  app.use(
    '*',
    (
      req: express.Request,
      _res: express.Response,
      next: express.NextFunction,
    ) => {
      req.headers['apollo-federation-include-trace'] = 'ftv1';
      next();
    },
  );
  app.use(errorHandlerMiddleware);

  return app;
};

export async function startExpressAppWithApolloRoutes(
  app: Express,
  port: number,
) {
  const httpServer = http.createServer(app).listen(port);
  httpServer.keepAliveTimeout = 61 * 1000;
  httpServer.headersTimeout = 65 * 1000;
  const apolloServer = getApolloServer(schema, httpServer);


  app.use('/health', (_, res) => {
    console.log('receive health check request');
    res.send('Health Check Ok');
  });

  app.use('/smoke', (_, res) => {
    console.log('receive smoke test request');
    res.send('Smoke Test Ok');
  })

  await apolloServer.start();
  app.use(
    '/',
    expressMiddleware<Context>(apolloServer, {
      context: getFullContext(apolloServer.cache),
    }),
  );

  app.use(
    '/graphql',
    expressMiddleware<Context>(apolloServer, {
      context: getFullContext(apolloServer.cache),
    }),
  );

  return { httpServer };
}

function getFullContext(cache: KeyValueCache) {
  return function (request: ExpressContextFunctionArgument): Promise<Context> {
    const context = getContext(request);

    return Promise.resolve({
      ...context,
      dataSources: getDataSources(cache, context),
    });
  };
}
