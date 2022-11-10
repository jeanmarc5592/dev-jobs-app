import { gql } from "graphql-request";

export const GET_JOBS = gql`
  query getJobs(
    $first: Int
    $skip: Int
    $company: String
    $position: String
    $location: String
    $contract: String
  ) {
    jobs(
      first: $first
      skip: $skip
      where: {
        OR: [{ company_contains: $company }, { position_contains: $position }]
        location_contains: $location
        contract_contains: $contract
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
    jobsConnection(
      first: $first
      skip: $skip
      where: {
        OR: [{ company_contains: $company }, { position_contains: $position }]
        location_contains: $location
        contract_contains: $contract
      }
    ) {
      pageInfo {
        hasNextPage
      }
    }
  }
`;
