import type http from 'http';

import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground';

import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
// import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
// import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
// import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import type { GraphQLSchema } from 'graphql';

// import config from './config';
// import { shouldCountError } from './error-handler';
// import {
//   contextToLowCardinalityTagsFn,
//   contextToTagsFn,
// } from './plugins/convert-context-to-tags';
// import metricsClient from './plugins/metrics-client';
// import security from './security';
// import cacheClient from './shared/caching/cache-client';
// import { traceRequestsPlugin } from './trace-requests-plugin';

// import { formatError } from 'plugins/format-error';
// import { logErrorsPlugin } from 'plugins/log-errors';
// import { createLogMutationsPlugin } from 'plugins/log-mutations';
// import { logValidationErrorsPlugin } from 'plugins/log-validation-errors';
// import { maskResponsePlugin } from 'plugins/mask-response';
// import { logServerErrors } from 'plugins/server-diagnostics';
// import { createTrackAuthErrorsPlugin } from 'plugins/track-auth-errors';
// import { createTrackEnumUsagePlugin } from 'plugins/track-enum-usage';
// import { createTrackErrorCountPlugin } from 'plugins/track-error-count';
// import { createTrackLatencyPlugin } from 'plugins/track-latency';
// import { createTrackOperationPlugin } from 'plugins/track-operations';
// import { createTrackResponsePlugin } from 'plugins/track-response-count';
import type { Context } from './types';

export const getApolloServer = (
  schema: GraphQLSchema,
  httpServer: http.Server,
) =>
  new ApolloServer<Context>({
    schema,
    introspection: true,
    includeStacktraceInErrorResponses: true,
    // validationRules: [
    //   security.rules.limitDepth(
    //     config.queryLimit.depth,
    //     undefined,
    //     security.logs.logQueryDepth,
    //   ),
    // ],
    // formatError,
    plugins: [
    //   ApolloServerPluginInlineTrace(), // eslint-disable-line new-cap
    //   logErrorsPlugin,
    //   logServerErrors,
    //   createTrackAuthErrorsPlugin(metricsClient, contextToTagsFn),
    //   createTrackErrorCountPlugin(
    //     metricsClient,
    //     contextToTagsFn,
    //     shouldCountError,
    //   ),
    //   createTrackOperationPlugin(metricsClient, contextToTagsFn),
    //   createLogMutationsPlugin(),
    //   createTrackEnumUsagePlugin(metricsClient, contextToTagsFn),
    //   logValidationErrorsPlugin,
    //   createTrackLatencyPlugin(metricsClient, contextToTagsFn),
    //   createTrackResponsePlugin(metricsClient, contextToLowCardinalityTagsFn),
    ApolloServerPluginLandingPageGraphQLPlayground(),
    //   traceRequestsPlugin,
      // Must be last -- masks errors that other plugins may need details of
    //   maskResponsePlugin,
      // eslint-disable-next-line new-cap
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
    // ...(cacheClient ? { cache: cacheClient(config) } : {}),
    csrfPrevention: false,
    allowBatchedHttpRequests: true,
    status400ForVariableCoercionErrors: true,
    persistedQueries: false,
  });