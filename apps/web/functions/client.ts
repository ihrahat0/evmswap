import { ApolloClient, InMemoryCache } from '@apollo/client'
const GRAPHQL_ENDPOINT = process.env.REACT_APP_AWS_API_ENDPOINT || 'https://dogeswap.co/v1/graphql'

//TODO: Figure out how to make ApolloClient global variable
export default new ApolloClient({
  connectToDevTools: false,
  uri: GRAPHQL_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
    },
  },
})
