/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchInfluencers
// ====================================================

export interface SearchInfluencers_search_edges_node {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  }
  
  export interface SearchInfluencers_search_edges {
    __typename: "InfluencerCountableEdge";
    node: SearchInfluencers_search_edges_node;
  }
  
  export interface SearchInfluencers_search_pageInfo {
    __typename: "PageInfo";
    endCursor: string | null;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
  }
  
  export interface SearchInfluencers_search {
    __typename: "InfluencerCountableConnection";
    edges: SearchInfluencers_search_edges[];
    pageInfo: SearchInfluencers_search_pageInfo;
  }
  
  export interface SearchInfluencers {
    search: SearchInfluencers_search | null;
  }
  
  export interface SearchInfluencersVariables {
    after?: string | null;
    first: number;
    query: string;
  }
  