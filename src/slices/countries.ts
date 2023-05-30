import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../lib/api';

export const fetchCountries = createAsyncThunk(
  'countries/fetch',
  async () => {
    const data = await get('/api/countries');
    return data;
  }
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default countriesSlice.reducer;
