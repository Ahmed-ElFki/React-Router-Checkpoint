import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ moviesToDisplay }) => {
	return (
		<div className='MovieList'>
			{moviesToDisplay.map((currentMovie) => (
				<MovieCard
					key={currentMovie.Id}
					title={currentMovie.Title}
					Desc={currentMovie.Desc}
					URL={currentMovie.URL}
					rate={currentMovie.Rate}
				/>
			))}
		</div>
	);
};

export default MovieList;
