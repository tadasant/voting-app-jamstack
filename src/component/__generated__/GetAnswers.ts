/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: GetAnswers
// ====================================================

export interface GetAnswers_Answer {
  __typename: "Answer";
  value: string;
}

export interface GetAnswers {
  /**
   * fetch data from the table: "Answer"
   */
  Answer: GetAnswers_Answer[];
}

export interface GetAnswersVariables {
  prompt: string;
}
