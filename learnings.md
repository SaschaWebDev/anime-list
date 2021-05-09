# learnings

A list of stuff to keep in mind after this project is done.

## Setup

Pre-configured CRA for Typescript and React Redux

- npx create-react-app my-app --template redux-typescript

Apollo Client & GraphQL

- yarn add @apollo/client graphql

Styled components ready for Typescript

- yarn add styled-components && yarn add -D @types/styled-components

Adding a new script to package.json to download server-side graphql schema to this client-side app

- "schema:download": "npx apollo service:download --endpoint=https://anilist.co/graphql ./src/app/graphql/graphql-schema.json"
