import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const propertiesApiHeaders = {
  "X-RapidAPI-Host": process.env.REACT_APP_PROPERTIES_RAPIDAPI_HOST,
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
};

const baseUrl = process.env.REACT_APP_BASE_URL;

const createRequest = (url) => ({ url, headers: propertiesApiHeaders });

export const propertiesApi = createApi({
  reducerPath: "propretiesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPropertiesForSale: builder.query({
      query: () =>
        createRequest(
          "/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6"
        ),
    }),

    getPropertiesForRent: builder.query({
      query: () =>
        createRequest(
          "/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`"
        ),
    }),

    getFilteredProperties: builder.query({
      query: (query) =>
        createRequest(
          `/properties/list?locationExternalIDs=${query.locationExternalIDs}&purpose=${query.purpose}&categoryExternalID=${query.categoryExternalID}&bathsMin=${query.bathsMin}&rentFrequency=${query.rentFrequency}&priceMin=${query.priceMin}&priceMax=${query.maxPrice}&roomsMin=${query.roomsMin}&sort=${query.sort}&areaMax=${query.areaMax}`
        ),
    }),

    getPropertyDetails: builder.query({
      query: (id) => createRequest(`/properties/detail?externalID=${id}`),
    }),
  }),
});

export const {
  useGetPropertiesForSaleQuery,
  useGetPropertiesForRentQuery,
  useGetFilteredPropertiesQuery,
  useGetPropertyDetailsQuery,
} = propertiesApi;
