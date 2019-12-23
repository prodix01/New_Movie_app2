import React from "react";
import propTypes from "prop-types";

const Movie = ({id, title, year, rating, summary, poster}) => {
    return (
        <div>
            <img src={poster} alt={title} title={title} />
            <div>
                <h3>{title}</h3>
                <h5>{year}</h5>
                <p>{summary}</p>
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
    poster : propTypes.string.isRequired
};

export default Movie;