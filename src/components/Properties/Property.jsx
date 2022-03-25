import React from "react";
import { Link } from "react-router-dom";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import defaultImage from "../../assets/images/house.jpeg";
import classes from "./Property.module.css";

const Property = ({
  coverPhoto,
  price,
  rentFrequency,
  rooms,
  title,
  baths,
  area,
  agency,
  isVerified,
  externalID,
}) => {
  return (
    <Link className={classes.container} to={`/property/${externalID}`}>
      <div className={classes.property}>
        <img
          className={classes.coverPhoto}
          src={coverPhoto ? coverPhoto.url : defaultImage}
          alt=""
        />

        <div className={classes.contents}>
          <div className={classes.top}>
            <div className={classes.topInfo}>
              {isVerified && <GoVerified color="green" />}

              <span>
                AED {price}
                {rentFrequency && `/${rentFrequency}`}
              </span>
            </div>

            <div className={classes.logo}>
              <img src={agency && agency.logo.url} alt="" />
            </div>
          </div>

          <div className={classes.middle}>
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
            <BsGridFill />
          </div>

          <p>{title.length > 30 ? title.substring(0, 30) + "..." : title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Property;
