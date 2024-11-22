import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API, // 'backend' is the service name in docker-compose.yml
  cache: new InMemoryCache(),
});


export default client;
