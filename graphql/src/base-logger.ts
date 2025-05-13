import createLogger, { type LoggerOptions } from '@seek/logger';

const redactApiKeys = (stringToRedact: string) => {
  const apiKeys = ['apiKey', 'api_key', 'api-key'];
  const redactedString = apiKeys.reduce(
    (prev, curr) =>
      prev.replace(
        new RegExp(`${curr}=[A-Za-z0-9]*`, 'i'),
        `${curr}=[REDACTED]`,
      ),
    stringToRedact,
  );
  return redactedString;
};

const apiKeyRedactionPaths = [
  'error.extensions.exception.message',
  'error.extensions.response.url',
  'error.message',
];

const completelyRedactPaths = [
  'headers.cookie',
  'headers.authorization', // seek logger options defaults to redacting authorization headers but this is a fallback for safety
];

export const redact = (stringToRedact: string, paths: string[]) => {
  const path = paths.join('.');
  if (apiKeyRedactionPaths.includes(path)) {
    return redactApiKeys(stringToRedact);
  }
  return '[Redacted]';
};

export const loggerOptions: LoggerOptions = {
  name: 'data-service-api',
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  maxObjectDepth: 6,
  redact: {
    paths: [...apiKeyRedactionPaths, ...completelyRedactPaths],
    censor: redact,
  },
};

const logger = createLogger(loggerOptions);

export default logger;