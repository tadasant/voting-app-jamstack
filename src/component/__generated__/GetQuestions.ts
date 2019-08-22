/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetQuestions
// ====================================================

export interface GetQuestions_Question {
  __typename: "Question";
  prompt: string;
}

export interface GetQuestions {
  /**
   * fetch data from the table: "Question"
   */
  Question: GetQuestions_Question[];
}
