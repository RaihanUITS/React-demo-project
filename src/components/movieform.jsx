import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Hello! It's a MovieForm! {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.replace("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
