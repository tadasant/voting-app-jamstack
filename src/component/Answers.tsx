import React, { useState } from "react";
import AnswerLabel from "./AnswerLabel";
import AnswerButton from "./AnswerButton";
import gql from "graphql-tag";
import { useSubscription, useMutation } from "@apollo/react-hooks";
import { GetAnswers } from "./__generated__/GetAnswers";

const GET_ANSWERS = gql`
	subscription GetAnswers($prompt: String!) {
		Answer(where: { question: { _eq: $prompt } }) {
			value
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

	if (!data || !data.Answer) {
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
					{data.Answer.map(answer => (
						<AnswerLabel value={answer.value} prompt={props.prompt} />
					))}
				</React.Fragment>
			) : (
				<React.Fragment>
					{data.Answer.map(answer => (
						<AnswerButton onClick={onClick} value={answer.value} />
					))}
				</React.Fragment>
			)}
		</div>
	);
};

export default Answers;
