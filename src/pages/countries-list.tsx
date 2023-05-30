import SearchInput from "../components/search";
import CountriesTable from "../components/countries-table";
import {
  Country,
  useGetAllCountriesQuery,
  useGetCountryByNameQuery,
} from "../lib/api";
import { useState } from "react";

function extractCountries(
  allCountries: Country[],
  searchTerm: string,
  searchedCountry?: Country
) {
  if (searchTerm) {
    return searchedCountry
      ? [
          {
            id: searchedCountry.alpha2Code,
            name: searchedCountry.name,
            capital: searchedCountry.capital,
          },
        ]
      : [];
  }

  return allCountries.map((country: Country) => ({
    id: country.alpha2Code,
    name: country.name,
    capital: country.capital,
  }));
}

const CountriesList = () => {
  const { data: rawCountries = [], isFetching: isAllCountriesFetching } =
    useGetAllCountriesQuery("");
  const allCountries = Object.values(rawCountries);
  const [searchTerm, setSearchTerm] = useState("");
  const { data: searchedCountry, isFetching: isSearchedCountryFetching } =
    useGetCountryByNameQuery(searchTerm);

  const isFetching = searchTerm
    ? isSearchedCountryFetching
    : isAllCountriesFetching;
  const countries = extractCountries(allCountries, searchTerm, searchedCountry);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Countries List</h1>
      <SearchInput searchValue={searchTerm} setSearchValue={setSearchTerm} />
      <CountriesTable countries={countries} isLoading={isFetching} />
    </div>
  );
};

export default CountriesList;
