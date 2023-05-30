"use client";
import { DataGrid } from "@mui/x-data-grid";

import { Country, useGetCountryByNameQuery } from "../lib/api";
import { useState } from "react";
import SearchInput from "./search";

interface CountryTableProps {
  allCountries: Country[];
  isAllCountriesFetching: boolean;
}

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "capital", headerName: "Capital", width: 130 },
  // add other fields as needed
];

const CountryTable: React.FC<CountryTableProps> = ({
  allCountries,
  isAllCountriesFetching,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: searchedCountry, isFetching: isSearchedCountryFetching } =
    useGetCountryByNameQuery(searchTerm);

  const isFetching = searchTerm
    ? isSearchedCountryFetching
    : isAllCountriesFetching;
  const rows = searchTerm
    ? [
        {
          id: searchedCountry?.alpha2Code,
          name: searchedCountry?.name,
          capital: searchedCountry?.capital,
          // map other fields as needed
        },
      ]
    : allCountries.map((country: Country) => ({
        id: country.alpha2Code,
        name: country.name,
        capital: country.capital,
        // map other fields as needed
      }));

  return (
    <div className="mx-auto w-11/12 h-[90%]">
      <SearchInput searchValue={searchTerm} setSearchValue={setSearchTerm} />
      <DataGrid rows={rows} columns={columns} pagination loading={isFetching} />
    </div>
  );
};

export default CountryTable;
