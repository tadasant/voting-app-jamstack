import React from "react";
import "./App.css";
import ApolloClient from "apollo-client/ApolloClient";
import { ApolloProvider } from "@apollo/react-hooks";
import VotingScreen from "./component/VotingScreen";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-boost";

// Create an http link:
const httpLink = new HttpLink({
	uri: "https://voting-app-jamstack.herokuapp.com/v1/graphql"
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
	uri: `wss://voting-app-jamstack.herokuapp.com/v1/graphql`,
	options: {
		reconnect: true
	}
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
	// split based on operation type
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link,
	cache: new InMemoryCache()
});

const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<VotingScreen />
			</div>
		</ApolloProvider>
	);
};

export default App;
