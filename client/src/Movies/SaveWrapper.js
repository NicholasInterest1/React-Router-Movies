import React from "react";
import MovieCard from "./MovieCard";

export default function SaveWrapper(props) {
  return (
    <div className="save-wrapper">
        <MovieCard movie={props.movie} />
      <div
        className="save-button"
        onClick={event => {
          props.saveMovie();
        }}>
        Save
      </div>
    </div>
  );
}
