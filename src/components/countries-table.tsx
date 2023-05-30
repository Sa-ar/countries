"use client";
import { DataGrid } from "@mui/x-data-grid";

import { useGetAllCountriesQuery } from "../lib/api";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "capital", headerName: "Capital", width: 130 },
  // add other fields as needed
];

function CountryTable() {
  const { data = {}, isFetching } = useGetAllCountriesQuery("");

  const rows = Object.values(data).map((country) => ({
    id: country.alpha2Code,
    name: country.name,
    capital: country.capital,
    // map other fields as needed
  }));

  return (
    <div className="mx-auto w-11/12 h-[90%]">
      <DataGrid rows={rows} columns={columns} pagination loading={isFetching} />
    </div>
  );
}

export default CountryTable;
