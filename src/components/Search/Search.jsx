import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
import PropertyList from "../Properties/PropertyList";
import noResultImg from "../../assets/images/noresult.svg";
import { filterData } from "../../utils/filterData";
import { useQuery } from "../../utils/useQuery";
import { useGetFilteredPropertiesQuery } from "../../services/propertiesApi";
import Spinner from "../spinner/Spinner";
import classes from "./Search.module.css";

const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);

  const [filters] = useState(filterData);

  const [filterValues, setfilterValues] = useState({});

  const router = useQuery();

  const purpose = router.get("purpose");

  const query = {
    locationExternalIDs: "5002",
    purpose: filterValues.purpose || purpose || "for-rent",
    categoryExternalID: filterValues.categoryExternalID || "4",
    bathsMin: filterValues.bathsMin || "0",
    rentFrequency: filterValues.rentFrequency || "yearly",
    priceMin: filterValues.minPrice || "0",
    maxPrice: filterValues.maxPrice || "1000000",
    roomsMin: filterValues.roomsMin || "0",
    sort: filterValues.sort || "price-desc",
    areaMax: filterValues.areaMax || "35000",
  };

  const { data, isFetching } = useGetFilteredPropertiesQuery(query);

  const filteredProperties = data?.hits;

  return (
    <div className={classes.search}>
      <div className={classes.filtersContainer}>
        <div
          className={classes.header}
          onClick={() => setSearchFilters((prev) => !prev)}
        >
          <span>Search Property By Filters</span>

          <BsFilter />
        </div>

        {searchFilters && (
          <div className={classes.filters}>
            {filters?.map((filter) => (
              <select
                key={filter.queryName}
                onChange={(e) =>
                  setfilterValues((prev) => ({
                    ...prev,
                    [filter.queryName]: e.target.value,
                  }))
                }
                placeholder={filter.placeholder}
              >
                {filter?.items?.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            ))}
          </div>
        )}
      </div>

      <span className={classes.title}>Properties {purpose}</span>

      {isFetching ? (
        <Spinner />
      ) : (
        <PropertyList properties={filteredProperties} />
      )}

      {filteredProperties?.length === 0 && (
        <div className={classes.empty}>
          <img src={noResultImg} alt="No result" />
          <p>No Result Found.</p>
        </div>
      )}
    </div>
  );
};

export default Search;
