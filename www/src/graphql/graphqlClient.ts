import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache
} from "apollo-boost";
import { onError } from "apollo-link-error";

const httpLink = new HttpLink({
  uri: "http://localhost:80"
});

const logErrorsLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
  }
});

export const apolloClient = new ApolloClient({
  // Be careful, order matters
  link: ApolloLink.from([logErrorsLink, httpLink]),
  cache: new InMemoryCache()
});
