import { GraphQLClient } from "graphql-request";

const gqlRequest = ({ query, variables, includeDrafts, excludeInvalid }) => {
  const headers = {
    authorization: `Bearer ${import.meta.env.VITE_CMS_AUTH_TOKEN}`,
  };

  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }

  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }

  const client = new GraphQLClient(import.meta.env.VITE_CMS_URI, { headers });
  return client.request(query, variables);
};

export default gqlRequest;
