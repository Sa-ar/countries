import { Country } from "../../lib/api";
import BaseChart from "./base-chart";
import { useGetAllCountriesQuery } from "../../lib/api";

const CountryTimezoneChart = () => {
  const countries = Object.values(
    useGetAllCountriesQuery("").currentData ?? {}
  );
  const timezoneCounts = countries.reduce(
    (acc: Record<string, number>, country: Country) => {
      country.timezones.forEach((timezone) => {
        acc[timezone] = (acc[timezone] || 0) + 1;
      });
      return acc;
    },
    {}
  );
  const labels = Object.keys(timezoneCounts);
  const dataset = {
    label: "Number of Countries",
    data: Object.values(timezoneCounts),
  };

  return (
    <BaseChart
      label="Countries in each timezone"
      labels={labels}
      dataset={dataset}
    />
  );
};

export default CountryTimezoneChart;
