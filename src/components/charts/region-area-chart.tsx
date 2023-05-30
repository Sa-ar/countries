import BaseChart, { CHART_TYPES } from "./base-chart";
import { Country, useGetAllCountriesQuery } from "../../lib/api";

const RegionAreaChart = () => {
  const countries = Object.values(
    useGetAllCountriesQuery("").currentData ?? {}
  );

  // Calculate total area by region
  const regionAreas = countries.reduce(
    (acc: Record<string, number>, country: Country) => {
      acc[country.region] = (acc[country.region] || 0) + country.area;
      return acc;
    },
    {}
  );

  const labels = Object.keys(regionAreas);
  const dataset = {
    label: "Total Area",
    data: Object.values(regionAreas),
  };

  return (
    <BaseChart
      variant={CHART_TYPES.PIE}
      label="Region Areas"
      labels={labels}
      dataset={dataset}
    />
  );
};

export default RegionAreaChart;
