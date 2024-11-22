import React from 'react';
import { ApolloProvider, useQuery, gql } from '@apollo/client';
import client from './apollo-client';

const HELLO_QUERY = gql`
  query {
    hello
  }
`;

function Hello() {
  const { data, loading, error } = useQuery(HELLO_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <h1>{data.hello}</h1>;
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Hello />
      </div>
    </ApolloProvider>
  );
}

export default App;
