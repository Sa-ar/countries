import CountryTable from "./components/countries-table";
import ChartsPage from "./pages/charts";

function App() {
  return (
    <div className="container mx-auto py-10">
      <ChartsPage />
      <CountryTable />
    </div>
  );
}

export default App;
