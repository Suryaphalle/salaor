import gql from "graphql-tag";

import makeTopLevelSearch from "@saleor/hooks/makeTopLevelSearch";
import { pageInfoFragment } from "@saleor/queries";
import {
  SearchInfluencers,
  SearchInfluencersVariables
} from "./types/SearchInfluencers";

export const searchInfluencers = gql`
  ${pageInfoFragment}
  query SearchInfluencers($after: String, $first: Int!, $query: String!) {
    search: influencers(
      after: $after
      first: $first
      filter: { search: $query }
    ) {
      edges {
        node {
          id
          firstName
          lastName
          email
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`;

export default makeTopLevelSearch<
    SearchInfluencers,
    SearchInfluencersVariables
>(searchInfluencers);
