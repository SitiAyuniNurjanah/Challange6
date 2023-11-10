import { combineReducers } from "redux";
import authLoginReducers from "./auth/authLoginReducers";
import MovieReducers from "./movie/MovieReducers";

export default combineReducers({
  auth: authLoginReducers,
  movie: MovieReducers,
});