import React from "react";
import { useParams } from "react-router";

const MovieData = ({ match }) => {
	console.log(match);
	const { id } = useParams();
	return <div>{id}</div>;
};

export default MovieData;
