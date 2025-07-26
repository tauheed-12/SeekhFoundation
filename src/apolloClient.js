import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://ap-south-1.cdn.hygraph.com/content/cmd2a9pqf031s07wc8ogv1lqe/master",
  cache: new InMemoryCache(),
});