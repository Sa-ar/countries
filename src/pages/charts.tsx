import RegionPopulationChart from "../components/charts/region-population-chart";
import RegionAreaChart from "../components/charts/region-area-chart";
import CountryRegionChart from "../components/charts/country-region-chart";
import CountryTimezoneChart from "../components/charts/country-timezone-chart";

const ChartsPage = () => {
  // TODO: Change CountryPopulation to RegionPopulation and TimezonePopulation
  // TODO: add layout for desktop
  return (
    <div>
      <RegionPopulationChart />
      <RegionAreaChart />
      <CountryRegionChart />
      <CountryTimezoneChart />
    </div>
  );
};

export default ChartsPage;
