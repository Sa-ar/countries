import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ChartsPage from "./pages/charts";
import { useState } from "react";
import TabPanel from "./components/tabs-panel";
import CountriesList from "./pages/countries-list";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="container mx-auto">
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          position: "sticky",
          backgroundColor: "white",
          zIndex: 99,
          width: "100vw",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Dashboard" {...a11yProps(0)} />
          <Tab label="Countries List" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ChartsPage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CountriesList />
      </TabPanel>
    </div>
  );
}

export default App;
