import React from "react";

const MovieCard = ({movie}) => {
    return(
        <div className="movie">
            <div>
                <p>{movie.aired.prop.from.year}</p>
            </div>
            <div>
                <img src={movie.images.jpg.image_url !== 'N/A' ? movie.images.jpg.image_url : 'https://via.placeholder.com/400'} alt={movie.title} />
            </div>
            <div>
                <span>{movie.type}</span>
                <h3>{movie.title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;