import React from "react";
import QuestionHeader from "./QuestionHeader";
import Answers from "./Answers";
import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";
import { GetQuestions } from "./__generated__/GetQuestions";

const GET_QUESTIONS = gql`
	subscription GetQuestions {
		Question {
			prompt
		}
	}
`;

const VotingScreen: React.FC = () => {
	const { data } = useSubscription<GetQuestions>(GET_QUESTIONS);

	if (!data || !data.Question) {
		return null;
	}

	const lastQuestion = data.Question[data.Question.length - 1];

	return (
		<React.Fragment>
			<QuestionHeader prompt={lastQuestion.prompt} />
			<Answers prompt={lastQuestion.prompt} />
		</React.Fragment>
	);
};

export default VotingScreen;
