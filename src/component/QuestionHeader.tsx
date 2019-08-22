import React from "react";

interface Props {
	prompt: string;
}

const QuestionHeader: React.FC<Props> = props => {
	return <header>{props.prompt}</header>;
};

export default QuestionHeader;
