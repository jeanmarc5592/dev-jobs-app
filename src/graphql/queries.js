import { gql } from "graphql-request";

export const JOBS_VIEW_QUERY = gql`
  query getJobs($first: Int) {
    jobs(first: $first) {
      company
      createdAt
      contract
      id
      location
      logoBackground
      logo {
        url
      }
      position
    }
  }
`;
