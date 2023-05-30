import CountryPopulationChart from "./components/country-population-chart";
import CountryTable from "./components/countries-table";
import { useGetAllCountriesQuery } from "./lib/api";

function App() {
  const { data: rawCountries = [], isFetching } = useGetAllCountriesQuery("");

  const allCountries = Object.values(rawCountries);

  return (
    <div className="container mx-auto py-10">
      <CountryPopulationChart countries={allCountries} />
      <CountryTable
        allCountries={allCountries}
        isAllCountriesFetching={isFetching}
      />
    </div>
  );
}

export default App;
