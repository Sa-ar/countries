import { Country, useGetAllCountriesQuery } from "../../lib/api";
import BaseChart from "./base-chart";

const CountryRegionChart = () => {
  const countries = Object.values(
    useGetAllCountriesQuery("").currentData ?? {}
  );
  const regionCounts = countries.reduce(
    (acc: Record<string, number>, country: Country) => {
      acc[country.region] = (acc[country.region] || 0) + 1;
      return acc;
    },
    {}
  );
  const labels = Object.keys(regionCounts);
  const dataset = {
    label: "Number of Countries",
    data: Object.values(regionCounts),
  };

  return (
    <BaseChart
      label="Countries in each region"
      labels={labels}
      dataset={dataset}
    />
  );
};

export default CountryRegionChart;
