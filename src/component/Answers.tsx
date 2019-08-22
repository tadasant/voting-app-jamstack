import React, { useState } from "react";
import AnswerLabel from "./AnswerLabel";
import AnswerButton from "./AnswerButton";
import gql from "graphql-tag";
import { useSubscription, useMutation } from "@apollo/react-hooks";
import { GetAnswers } from "./__generated__/GetAnswers";

const GET_ANSWERS = gql`
	subscription GetAnswers($prompt: String!) {
		Question(where: { prompt: { _eq: $prompt } }) {
			answer1
			answer2
		}
	}
`;

const ADD_RESPONSE = gql`
	mutation AddResponse($prompt: String!, $answer: String!) {
		insert_Response(objects: { answer: $answer, question: $prompt }) {
			returning {
				id
			}
		}
	}
`;

interface Props {
	prompt: string;
}

const Answers: React.FC<Props> = props => {
	const [showResponses, setShowResponses] = useState(false);
	const { data } = useSubscription<GetAnswers>(GET_ANSWERS, {
		variables: { prompt: props.prompt }
	});
	const [addResponse] = useMutation(ADD_RESPONSE);

	if (!data || !data.Question || data.Question.length !== 1) {
		return null;
	}

	const onClick = (value: string) => {
		setShowResponses(true);
		addResponse({ variables: { prompt: props.prompt, answer: value } });
	};

	return (
		<div className="answer-container">
			{showResponses ? (
				<React.Fragment>
					<AnswerLabel value={data.Question[0].answer1} prompt={props.prompt} />
					<AnswerLabel value={data.Question[0].answer2} prompt={props.prompt} />
				</React.Fragment>
			) : (
				<React.Fragment>
					<AnswerButton onClick={onClick} value={data.Question[0].answer1} />
					<AnswerButton onClick={onClick} value={data.Question[0].answer2} />
				</React.Fragment>
			)}
		</div>
	);
};

export default Answers;
