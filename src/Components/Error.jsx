import React from "react";
import classes from "./Error.module.css";
function Error() {
  return (
    <div className={classes.errorcontainer}>
      <h1>
        Oops! There is something wrong. We are working on it come back after
        some time
      </h1>
    </div>
  );
}

export default Error;
