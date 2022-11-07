export const JOBS_VIEW_QUERY = `
  query {
    jobs {
      company
      createdAt
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
