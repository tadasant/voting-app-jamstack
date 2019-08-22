/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetResponses
// ====================================================

export interface GetResponses_Response {
  __typename: "Response";
  id: number;
}

export interface GetResponses {
  /**
   * fetch data from the table: "Response"
   */
  Response: GetResponses_Response[];
}

export interface GetResponsesVariables {
  prompt: string;
  answer: string;
}
