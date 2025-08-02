import { gql } from "@apollo/client";

export const GET_ALL_WORK = gql`
  query GetAllWork {
    workSchemas {
      
      workHeading
      workContent
      workDate
      
      workAssets {
        url
    }
}
}
`;