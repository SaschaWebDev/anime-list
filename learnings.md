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

Folder Structure

- Within app/ there is the components folder which only holds dummy components that don't know about state, props, redux etc. At most they have internal states
- Then there is containers which are pages and have an own index.tsx as their starting points
