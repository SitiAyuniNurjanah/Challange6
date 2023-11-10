import { useQuery } from "@tanstack/react-query";
// import { http2 } from "../../utils/http2";
import { API_ENDPOINT } from "../../utils/api_endpoint";
import http from "../../utils/http";

export const DataMoviePopular = async (movie) => {
    console.log(movie, "ini movie")
    const {data} = await http.get(`${API_ENDPOINT.MOVIE_POPULAR}?movie=${movie}`)
    return data
}

export const useDataPopularMovie = (movie, token) => {
    return useQuery({
      queryKey: ["useDataMoviePopular", movie],
      queryFn: () => DataMoviePopular(movie),
    });
  }