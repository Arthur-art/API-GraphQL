import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

export function App() {
  return (
    <>
    
    </>
  );
}

client
  .query({
    query: gql`
      query{
  users{
    name
  }
}
    `
  })
  .then(result => console.log(result));