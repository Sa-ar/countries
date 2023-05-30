import { Country } from "../lib/api";
import { Chart, registerables } from "chart.js";
import BaseChart from "./base-chart";

Chart.register(...registerables);

interface CountryPopulationChartProps {
  countries: Country[];
}

const CountryPopulationChart: React.FC<CountryPopulationChartProps> = ({
  countries,
}) => {
  const labels = countries.map((country: Country) => country.name);
  const dataset = {
    label: "Population",
    data: countries.map((country: Country) => country.population),
  };

  return (
    <BaseChart label="Country Population" labels={labels} dataset={dataset} />
  );
};

export default CountryPopulationChart;
