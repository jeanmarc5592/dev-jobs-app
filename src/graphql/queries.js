import { gql } from "graphql-request";

export const JOBS_VIEW_QUERY = gql`
  query getJobs($first: Int, $skip: Int) {
    jobs(first: $first, skip: $skip) {
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
    jobsConnection {
      aggregate {
        count
      }
    }
  }
`;
