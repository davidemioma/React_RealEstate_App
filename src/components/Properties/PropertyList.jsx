import React from "react";
import Property from "./Property";
import classes from "./PropertyList.module.css";

const PropertyList = ({ properties }) => {
  return (
    <div className={classes.properties}>
      {properties?.map((p) => (
        <Property
          key={p.externalID}
          coverPhoto={p.coverPhoto}
          price={p.price}
          rentFrequency={p.rentFrequency}
          rooms={p.rooms}
          title={p.title}
          baths={p.baths}
          area={p.area}
          agency={p.agency}
          isVerified={p.isVerified}
          externalID={p.externalID}
        />
      ))}
    </div>
  );
};

export default PropertyList;
