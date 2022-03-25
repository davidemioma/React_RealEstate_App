import React, { Fragment } from "react";
import PropertyDetails from "../components/Property/PropertyDetails";
import { useParams } from "react-router";
import { useGetPropertyDetailsQuery } from "../services/propertiesApi";
import Spinner from "../components/spinner/Spinner";

const PropertyPage = () => {
  const { propertyId } = useParams();

  const { data, isFetching } = useGetPropertyDetailsQuery(propertyId);

  if (isFetching) return <Spinner />;

  return (
    <Fragment>
      <PropertyDetails propertyDetail={data} />
    </Fragment>
  );
};

export default PropertyPage;
