import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isPending: false,
  movies: [],
  bookmark: [],
};

export const getMovies = createAsyncThunk('movie/getMovies', async (search) => {
  let res = await axios.get('https://www.omdbapi.com/?s=avenger&apikey=2f59c9ba');
  return res.data.Search;
});

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMovies.pending, (state, action) => {
        state.isPending = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isPending = false;
        state.movies = action.payload;
      });
  },
});

export default movieSlice.reducer;
