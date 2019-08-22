/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAnswers
// ====================================================

export interface GetAnswers_Question {
  __typename: "Question";
  answer1: string;
  answer2: string;
}

export interface GetAnswers {
  /**
   * fetch data from the table: "Question"
   */
  Question: GetAnswers_Question[];
}

export interface GetAnswersVariables {
  prompt: string;
}
