# gie-data-service
support data access to marketplace data

## Setup local environment
Install Volta
```
curl https://get.volta.sh | bash
. ~/.zshrc
volta install node@20.11.0
```

## Get started to deploy
This monorepo consist of 2 deployments
* foundation deployment
```
npm run foundation:generate-schema ## generate zod schema based on tenant config
npm run foundation:deploy ## deploy foundation stack that consists of lambda, DDB table & etc
```
* GraphQL endpoint deployment
```
npm run graphql:generate-component ## generate datasource schema
npm run graphql:generate-schema ## graphql codegen to generate graphql types
npm run graphql:build ## build graphql app
npm run graphql:start ## start graphql server 
```

## TODO
* Resource tagging
* Cron / Queue / DLQ for worker
* DDB table cross account resource sharing
* schema generate from query
* configuration validation

# gie-common-service
