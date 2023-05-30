import { Country, useGetAllCountriesQuery } from "../../lib/api";
import BaseChart from "./base-chart";

const RegionPopulationChart = () => {
  const countries = Object.values(
    useGetAllCountriesQuery("").currentData ?? {}
  );
  const regionsPopulation = countries.reduce(
    (acc: Record<string, number>, country: Country) => {
      acc[country.region] = (acc[country.region] || 0) + country.population;
      return acc;
    },
    {}
  );
  const labels = Object.keys(regionsPopulation);
  const dataset = {
    label: "Region Population",
    data: Object.values(regionsPopulation),
  };

  return (
    <BaseChart label="Country Population" labels={labels} dataset={dataset} />
  );
};

export default RegionPopulationChart;
