import React, { Component } from "react";
import { useState, useEffect } from "react";
import MovieRow from "./movieRow";

const MovieList = () => {
  const [name, setName] = useState("Thang");

  useEffect(() => {
    console.log("Name :", { name });

    return () => {
      console.log("Cleanup");
    };
  }, [name]);

  return (
    <React.Fragment>
      <div>Movie List {name}</div>
      <button
        onClick={() => (name === "Thang" ? setName("Boooh") : setName("Thang"))}
      >
        Save
      </button>

      <MovieRow />
    </React.Fragment>
  );
};

export default MovieList;
