import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import classes from "./Movie.module.css";
import { Link } from "react-router-dom";
import Error from "./Error";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [isError, setError] = useState(false);
  const ref = useRef();
  const API_KEY = "6518ae7cd3d526b4453531051cc4d408";
  const fetchTrending = async () => {
    const { data } = await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`
      )
      .catch((error) => {
        setError(true);
        console.log("Error:", error.message);
      });
    setMovies(data.results);
  };
  const searchMovie = async (query) => {
    const { data } = await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
      )
      .catch((error) => {
        setError(true);
        console.log("Error:", error.message);
      });
    setSearchedMovies(data.results);
  };

  function searchHandler() {
    setSearch(ref.current.value);
    // ref.current.value = "";
  }

  useEffect(() => {
    fetchTrending();
    searchMovie(search);
  }, [search]);

  return (
    <>
      {isError ? (
        <Error />
      ) : (
        <>
          <div className={classes.search}>
            <input
              type="text"
              placeholder="Search your movies"
              ref={ref}
              onKeyDown={(e) => {
                if (e.key === "Enter") searchHandler();
              }}
            />
            <button onClick={searchHandler}>Search</button>
          </div>

          {searchedMovies.length === 0 ? (
            <div className={classes.cardgrid}>
              {movies.map((item) => (
                <Link to={`/${item.id}`} key={item.id}>
                  <Card
                    imageURL={item.poster_path}
                    title={item.title}
                    date={item.release_date}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className={classes.cardgrid}>
              {searchedMovies.map((item) => (
                <Link to={`/${item.id}`} key={item.id}>
                  <Card
                    imageURL={item.poster_path}
                    title={item.title}
                    date={item.release_date}
                  />
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Movie;
