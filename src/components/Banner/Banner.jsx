import React from "react";
import { Link } from "react-router-dom";
import classes from "./Banner.module.css";

const Banner = ({
  imageUrl,
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) => {
  return (
    <div className={classes.Banner}>
      <img src={imageUrl} alt="" />

      <div className={classes.content}>
        <p className={classes.purpose}>{purpose}</p>

        <p className={classes.title}>
          {title1}
          <br />
          {title2}
        </p>

        <p className={classes.desc}>
          {desc1}
          <br />
          {desc2}
        </p>

        <button>
          <Link to={linkName}>{buttonText}</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
