# Chrono

React client for Chrono

## Getting started

### Create .env file

```bash
echo "REACT_APP_GRAPHQL_ENDPOINT=http://localhost:9000/graphql" > .env
```

### Run

```
# Run docker-container and automatically install all depedencies
docker-compose up
```

### Get introspection schema

```
# Gets schema from graphql endpoint and saves to schema.json
yarn get-schema
```
