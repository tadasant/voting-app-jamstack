import React from "react";

interface Props {
	onClick: (value: string) => void;
	value: string;
}

const AnswerButton: React.FC<Props> = props => {
	return (
		<button onClick={() => props.onClick(props.value)}>{props.value}</button>
	);
};

export default AnswerButton;
