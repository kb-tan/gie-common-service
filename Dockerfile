ARG BASE_IMAGE
ARG BASE_TAG

###

FROM --platform=${BUILDPLATFORM:-arm64} ${BASE_IMAGE}:${BASE_TAG} AS deps

# RUN yarn install --ignore-optional --ignore-scripts --non-interactive --offline --production
RUN pnpm i 

###

FROM ${BASE_IMAGE}:${BASE_TAG} AS build

COPY . .

RUN npm run graphql:generate-component && npm run graphql:generate-schema && npm run graphql:build && npm run graphql:copy-schema

###

FROM --platform=${BUILDPLATFORM:-arm64} node:alpine3.19 AS runtime

WORKDIR /workdir

COPY --from=build /workdir/graphql/dist dist 
COPY --from=deps /workdir/node_modules node_modules

ENV NODE_ENV=production
ENV NODE_OPTIONS=--enable-source-maps

ARG PORT=8000
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD [ "node", "./dist/api.js" ]
