import { reduxDetailMovie } from "../../services/movie/Get_Data_Detail_Movie"
import { reduxMovieSearch } from "../../services/movie/Get_Data_Search_Movie"
import { setDataMovie } from "../reducers/movie/MovieReducers"
import { setMovieSearch } from "../reducers/movie/MovieSearchReducers"
import { reduxMovie } from "../../services/movie/Get_Data_Movie";

export const MovieAction = () => (dispatch) => {
    reduxMovie().then((result) => {
        console.log(result.data.data, "result")
        
        dispatch(setDataMovie(result.data.data));

    }).catch((err) => {
        console.log(err, "err")
    });
}

export const MovieSearch = (query) => (dispatch) => {
    window.location.href=`/search/${query}`
}

export const SearchMovieFilm = (movie, query) => async (dispatch) => {
    return reduxMovieSearch (movie, query).then((result) => {
        console.log(result, "Movie yang anda cari")
        return dispatch(setMovieSearch(result));
    }).catch((err) => {
        console.log(err, "error")
    })
}

export const MovieDetail = (id) => (dispatch) => {
    return reduxDetailMovie(id).then((result) => {
        return dispatch(setDataMovie(result.data.data));
    }).catch((err) => {
        console.log(err, "error")
    });
}