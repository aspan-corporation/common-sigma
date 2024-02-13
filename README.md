# Building
```
  build:
    commands:
      - npm run graphql:generate
      - npm run graphql:copydef
      - npm run graphql:transpile
      - npm publish
```