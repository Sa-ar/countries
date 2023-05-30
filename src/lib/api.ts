import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Demonym = { m: string, f: string };
type Currency = { name: string, symbol: string };
type RegionalBloc = { acronym: string, name: string };
export type Country = {
  "name": string,
  "official_name": string,
  "topLevelDomain": string[],
  "alpha2Code": string,
  "alpha3Code": string,
  "cioc": string,
  "numericCode": string,
  "callingCode": string,
  "capital": string,
  "altSpellings": string[],
  "region": string,
  "subregion": string,
  "population": number,
  "latLng": Record<string, number[]>,
  "demonyms": Record<string, Demonym>,
  "area": number,
  "gini": Record<string, number>,
  "timezones": string[],
  "borders": string[],
  "nativeNames": Record<string, { official: string, common: string }>,
  "currencies": Record<string, Currency>,
  "languages": Record<string, string>,
  "translations": Record<string, string>,
  "flag": {
    "small": string,
    "medium": string,
    "large": string
  },
  "regionalBlocs": RegionalBloc[]
}

export const countryApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://countryapi.io/api/' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<Record<string, Country>, string>({
      query: () => `all?apikey=${import.meta.env.VITE_COUNTRIES_API_KEY}`
    }),
    getCountryByName: builder.query<Country, string>({
      query: (name) => `name/${name}?apikey=${import.meta.env.VITE_COUNTRIES_API_KEY}`,
    }),
  }),
})

export const { useGetCountryByNameQuery, useGetAllCountriesQuery } = countryApi
