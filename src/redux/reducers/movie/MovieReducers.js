import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   dataMovie : []
}

const MovieReducers = createSlice({
    name : "Movie",
    initialState,
    reducers : {
        setDataMovie : (state, action) => {
            state.dataMovie = action.payload;
        },
    }
})

export const { setDataMovie } = MovieReducers.actions;

export default MovieReducers.reducer;