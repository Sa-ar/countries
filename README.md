# Countries App

This is a React-based app that showcases list of countries and charts (bar chart and pie chart) using various technologies and libraries such as React, Vite, Tailwind CSS, Material-UI (MUI), Chart.js, Axios, RTK-query, redux-logger, and Redux.

## Description

The Countries app provides a simple and responsive user interface to visualize data using bar and pie charts as well as a sortable and searchable list of all the countries. It leverages the power of React for building dynamic UI components, Vite for fast development and hot module reloading, Tailwind CSS for efficient styling, MUI for additional UI components and theming, Chart.js for charting functionality, Axios and RTK-query for making HTTP requests, redux-logger for logging events, and Redux for state management.

## Technologies Used

- React
- Vite
- Tailwind CSS
- Material-UI (MUI)
- Chart.js
- Axios
- Redux
- RTK-query
- redux-logger

## Perquisites For Installation

- [Node.js](https://nodejs.org/en) version >= 14.17
- [CountryAPI.io](https://countryapi.io/) API key
- [PNPM](https://pnpm.io/) as a package manager

## Installation

Follow the steps below to install and run the project on your local machine:

1. Clone the repository:

   ```shell
   git clone https://github.com/Sa-ar/countries.git
   ```

2. Navigate to the project directory:

   ```shell
   cd countries
   ```

3. Install the dependencies:

   ```shell
   pnpm install
   ```

4. Start the development server:

   ```shell
   pnpm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the app.

## Additional Configuration

The app require additional configuration of an API key from [CountryAPI.io](https://countryapi.io/). A `.env.local` can be duplicated from the file `.env.local.example` in order to configure the API key for the API service.
