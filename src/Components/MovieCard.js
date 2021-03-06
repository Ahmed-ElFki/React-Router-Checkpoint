import React from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import MovieData from "./MovieData";

const MovieCard = ({ id, title, Desc, URL, rate }) => {
	return (
		<div className='Movie'>
			<div className='MoviePoster'>
				<img src={URL} alt={title} style={{ width: "50%", height: "auto" }} />
			</div>
			<div className='MovieData'>
				<p style={{ marginBottom: "15px" }}>{title}</p>
				<p style={{ textAlign: "center" }}>{Desc}</p>
				<p>{rate} Star(s)</p>

				<BrowserRouter>
					<Switch>
						<Link to={"/MovieData/" + id}>OK</Link>
						<Route exact path={"/MovieData/:id"} component={MovieData} />
					</Switch>
				</BrowserRouter>
			</div>
		</div>
	);
};

export default MovieCard;
