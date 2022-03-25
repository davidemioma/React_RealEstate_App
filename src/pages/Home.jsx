import React, { Fragment } from "react";
import Banner from "../components/Banner/Banner";
import {
  useGetPropertiesForSaleQuery,
  useGetPropertiesForRentQuery,
} from "../services/propertiesApi";
import PropertyList from "../components/Properties/PropertyList";
import Spinner from "../components/spinner/Spinner";

const Home = () => {
  const { data: propertyForSale, isFetching: saleIsFetching } =
    useGetPropertiesForSaleQuery();

  const { data: propertyForRent, isFetching: rentIsFetching } =
    useGetPropertiesForRentQuery();

  const propertiesForSale = propertyForSale?.hits;

  const propertiesForRent = propertyForRent?.hits;

  return (
    <Fragment>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />

      {rentIsFetching ? (
        <Spinner />
      ) : (
        <PropertyList properties={propertiesForRent} />
      )}

      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />

      {saleIsFetching ? (
        <Spinner />
      ) : (
        <PropertyList properties={propertiesForSale} />
      )}
    </Fragment>
  );
};

export default Home;
