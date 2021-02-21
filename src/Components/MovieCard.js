import React from "react";

const MovieCard = ({ title, Desc, URL, rate }) => {
	return (
		<div className='Movie'>
			<div className='MoviePoster'>
				<img src={URL} alt={title} style={{ width: "50%", height: "auto" }} />
			</div>
			<div className='MovieData'>
				<p style={{ marginBottom: "15px" }}>{title}</p>
				<p style={{ textAlign: "center" }}>{Desc}</p>
				<p>{rate} Star(s)</p>
			</div>
		</div>
	);
};

export default MovieCard;
