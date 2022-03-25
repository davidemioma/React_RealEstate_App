import React from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import ImageScrollBar from "../ImageScrollBar/ImageScrollBar";
import classes from "./PropertyDetails.module.css";

const PropertyDetails = ({
  propertyDetail: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  return (
    <div className={classes.details}>
      {photos && <ImageScrollBar photos={photos} />}

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

        <p className={classes.title}>{title}</p>

        <p className={classes.desc}>{description}</p>
      </div>

      <div className={classes.specs}>
        <div>
          <p>Type</p>
          <span>{type}</span>
        </div>

        <div>
          <p>Purpose</p>
          <span>{purpose}</span>
        </div>
      </div>

      {furnishingStatus && (
        <div className={classes.fstatus}>
          <p>Furnishing Status</p>
          <span>{furnishingStatus}</span>
        </div>
      )}

      {amenities.length > 0 && (
        <div className={classes.amenities}>
          <h3>Facilites:</h3>

          <div className={classes.amenity}>
            {amenities.map((amenity) => (
              <span key={amenity.text}>{amenity.text}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
