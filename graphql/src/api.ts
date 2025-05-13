import { EventEmitter } from 'events';

import cluster from 'express-cluster';

import { getExpressApp, startExpressAppWithApolloRoutes } from './app';
import logger from './base-logger';
// import config from './config';

const config = {
    port: parseInt(process.env.PORT ?? "8000"),
    cpuCount: 1
}

const start = () => {
  const app = getExpressApp();
  startExpressAppWithApolloRoutes(app, config.port).then(
    () => {
      logger.info(`🚀 Server ready at http://localhost:${config.port}/`);
    },
    (error) => {
      logger.error(error, 'Error starting server');
    },
  );
};

const startCluster = () => {
  const app = getExpressApp();

  cluster(
    () => {
      startExpressAppWithApolloRoutes(app, config.port).then(
        () => {
          logger.info({
            message: `🚀 Server ready at http://localhost:${config.port}/ with ${config.cpuCount} instances`,
          });
        },
        (error) => {
          logger.error(error, 'Error starting server');
        },
      );
    },
    {
      respawn: true,
      count: config.cpuCount,
    },
  );
};

EventEmitter.setMaxListeners(11);

if (config.cpuCount === 1 || process.env.IS_LOCAL) {
  start();
} else {
  startCluster();
}
