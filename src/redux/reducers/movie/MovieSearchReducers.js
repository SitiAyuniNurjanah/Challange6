import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    DataSearch: []
}

const MovieSearchReducer = createSlice ({
    name: 'search',
    initialState,
    reducers : {
        setMovieSearch : (state, action) => {
            state.DataSearch = action.payload;
        },
    }
});

export const { setMovieSearch } = MovieSearchReducer.actions;
export default MovieSearchReducer.reducer;