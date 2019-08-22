/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddResponse
// ====================================================

export interface AddResponse_insert_Response_returning {
  __typename: "Response";
  id: number;
}

export interface AddResponse_insert_Response {
  __typename: "Response_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: AddResponse_insert_Response_returning[];
}

export interface AddResponse {
  /**
   * insert data into the table: "Response"
   */
  insert_Response: AddResponse_insert_Response | null;
}

export interface AddResponseVariables {
  prompt: string;
  answer: string;
}
