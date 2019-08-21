import React from "react";

const MovieCard = props => {
  const { title, director, releasedate, metascore, rottentomato, stars, imageUrl } = props.movie;

  console.log(props);
  return (
    <div className="movie-card">
      <div className="movie-card-img">
          <img src={imageUrl} alt={title} />
        </div>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-releasedate">
      Release Date: <em>{releasedate}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <div className="movie-rottentomato">
        Rotten Tomato: <strong>{rottentomato}</strong>
      </div>
      <h3>Actors</h3>
    {!stars ? (
      <div>Loading Stars...</div>
    ) : (
      stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))
    )}
    </div>

  );
};

export default MovieCard;
