import RegionPopulationChart from "../components/charts/region-population-chart";
import RegionAreaChart from "../components/charts/region-area-chart";
import CountryRegionChart from "../components/charts/country-region-chart";
import CountryTimezoneChart from "../components/charts/country-timezone-chart";

const ChartsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-2">Regions Charts</h2>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <RegionPopulationChart />
            <CountryRegionChart />
            <RegionAreaChart />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-2">Timezones Chart</h2>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <CountryTimezoneChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;
