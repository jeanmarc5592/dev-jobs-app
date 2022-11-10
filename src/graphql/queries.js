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
    jobsConnection(first: $first, skip: $skip) {
      pageInfo {
        hasNextPage
      }
    }
  }
`;

export const FILTER_JOBS_VIEW_QUERY_WITHOUT_CONTRACT = gql`
  query getJobs(
    $first: Int
    $skip: Int
    $company: String
    $position: String
    $location: String
  ) {
    jobs(
      first: $first
      skip: $skip
      where: {
        OR: [{ company_contains: $company }, { position_contains: $position }]
        location_contains: $location
      }
    ) {
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

export const FILTER_JOBS_VIEW_QUERY_WITH_CONTRACT = gql`
  query getJobs(
    $first: Int
    $skip: Int
    $company: String
    $position: String
    $location: String
    $contract: [ContractType]
  ) {
    jobs(
      first: $first
      skip: $skip
      where: {
        OR: [{ company_contains: $company }, { position_contains: $position }]
        location_contains: $location
        contract_in: $contract
      }
    ) {
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
