"use client";
import { DataGrid } from "@mui/x-data-grid";

import { useGetAllCountriesQuery, useGetCountryByNameQuery } from "../lib/api";
import { useState } from "react";
import SearchInput from "./search";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "capital", headerName: "Capital", width: 130 },
  // add other fields as needed
];

function CountryTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: allCountries = [], isFetching: isAllCountriesFetching } =
    useGetAllCountriesQuery("");
  const { data: searchedCountry = [], isFetching: isSearchedCountryFetching } =
    useGetCountryByNameQuery(searchTerm);

  const data = searchTerm ? searchedCountry : allCountries;
  const isFetching = searchTerm
    ? isSearchedCountryFetching
    : isAllCountriesFetching;
  const rows = Object.values(data).map((country) => ({
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
}

export default CountryTable;
