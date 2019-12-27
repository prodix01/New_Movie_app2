import React from "react";
import propTypes from "prop-types";

const Movie = ({id, title, year, rating, summary, poster,genres}) => {
    return (
        <div>
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul>
                    {genres.map((genres, index) => (
                        <li key={index} className="genres__genre">
                            {genres}
                        </li>
                    ))}
                </ul>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    );
};

Movie.propTypes = {
    id : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    year : propTypes.number.isRequired,
    rating : propTypes.number.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired
};

export default Movie;