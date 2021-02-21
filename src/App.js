import MovieList from "./Components/MovieList";
import "./App.css";
import { Data } from "./MoviesData/Data";
import { useState } from "react";
import MovieAdd from "./Components/MovieAdd";
import Filter from "./Components/Filter";

function App() {
	const [movies, setMovies] = useState(Data);

	const updateMoviesFromChild = (newMovie) => {
		setMovies([...movies, newMovie]);
	};

	const updateMoviesFromChildSearch = (foundMovie) => {
		setMovies(foundMovie);
	};

	return (
		<div className='App'>
			<Filter
				parentStateData={movies}
				updateMoviesFromChildSearch={updateMoviesFromChildSearch}
			/>
			<MovieList moviesToDisplay={movies} />
			<MovieAdd updateMoviesFromChild={updateMoviesFromChild} />
		</div>
	);
}

export default App;
