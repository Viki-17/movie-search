import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./MovieDetail.module.css";
function MovieDetail() {
  const params = useParams();
  console.log(params.id);
  const [movieDetails, setMovieDetails] = useState([]);
  const API_KEY = "6518ae7cd3d526b4453531051cc4d408";

  const fetchDetails = async () => {
    const { data } = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`
      )
      .catch((error) => {
        console.log("Error:", error.message);
      });
    setMovieDetails(data);
  };

  useEffect(() => {
    fetchDetails();
  }, [params]);

  return (
    <>
      <div className={classes.container}>
        <img
          className={classes.backdrop}
          src={`https://image.tmdb.org/t/p/w300${movieDetails?.backdrop_path}`}
          alt=""
        />
        <div className={classes.detailscontainer}>
          <div className={classes.poster}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movieDetails?.poster_path}`}
              alt=""
            />
          </div>
          <div className={classes.datacontainer}>
            <h1>{movieDetails?.title}</h1>
            <div className={classes.overview}>
              <h3>Overview</h3>
              <p>{movieDetails?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
