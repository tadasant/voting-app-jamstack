import React from "react";
import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";
import { GetResponses } from "./__generated__/GetResponses";

interface Props {
	value: string;
	prompt: string;
}

const GET_RESPONSES = gql`
	subscription GetResponses($prompt: String!, $answer: String!) {
		Response(where: { answer: { _eq: $answer }, question: { _eq: $prompt } }) {
			id
		}
	}
`;

const AnswerLabel: React.FC<Props> = props => {
	const { data } = useSubscription<GetResponses>(GET_RESPONSES, {
		variables: { prompt: props.prompt, answer: props.value }
	});

	if (!data || !data.Response) {
		return null;
	}

	const voteCount = data.Response.length;
	return (
		<p>
			{props.value}: {voteCount} votes
		</p>
	);
};

export default AnswerLabel;
