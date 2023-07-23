import React from "react";
import classes from "./Card.module.css";
// `https://image.tmdb.org/t/p/w300${imageURL}`
function Card({ imageURL, title, date }) {
  return (
    <>
      <div className={classes.container}>
        <img src={`https://image.tmdb.org/t/p/w300${imageURL}`} alt="" />
      </div>
    </>
  );
}

export default Card;
