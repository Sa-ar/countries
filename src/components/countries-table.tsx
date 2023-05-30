"use client";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "capital", headerName: "Capital", width: 130 },
  // add other fields as needed
];

interface CountryTableProps {
  countries?: {
    id: string;
    name: string;
    capital: string;
  }[];
  isLoading: boolean;
}

const CountryTable: React.FC<CountryTableProps> = ({
  countries = [],
  isLoading,
}) => {
  return (
    <DataGrid
      rows={countries}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { pageSize: 12, page: 0 },
        },
      }}
      pagination
      pageSizeOptions={[12]}
      loading={isLoading}
    />
  );
};

export default CountryTable;
