import { gql } from "@apollo/client";

export const CHARACTERS_QUERY = gql`
  {
    characters(page: 2) {
      results {
        id
        name
        species
        image
        created
        episode {
          episode
          name
          id
          air_date
          created
        }
      }
    }
  }
`;
