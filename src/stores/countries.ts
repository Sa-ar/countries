import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { countryApi } from '../lib/api';
import { createLogger } from 'redux-logger';

const logger = createLogger();

export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware).concat(logger),
})

setupListeners(store.dispatch)