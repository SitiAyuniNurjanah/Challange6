import { useQuery } from "@tanstack/react-query"
import { API_ENDPOINT } from "../../utils/api_endpoint"
import { http3 } from "../../utils/http3"
import http from "../../utils/http"

export const reduxMovie = async () => {
    return await http.get(API_ENDPOINT.MOVIE_POPULAR)
}

// export const reduxMovie = async () => {
//     return await http.get(API_ENDPOINT.GET_MOVIE)
// }


export const fetchDataMovie = async ({queryKey}) => {
    const[_key, _params] = queryKey;
    const {data} = await http3.get(_key, { params : _params})
    return data
}

export const useMovieDataQuery = (options) => {
    return useQuery({
      queryKey: [API_ENDPOINT.NOW_PLAYING, options],
      queryFn: fetchDataMovie,
    });
  };
  

// import { useQuery } from "@tanstack/react-query"
// import http from "../../utils/htpp"
// import { API_ENDPOINT } from "../../utils/api-endpoint"

//unutk nge hit API
//     const fetchDataMovie = async ({queryKey}) => {

//     const [_key, _params] = queryKey;
//     const { data } = await http.get(_key, { params : _params})
//     return data
// }


// const useMovieDataQuery = (options) => {
//     return useQuery([API_ENDPOINT.NOW_PLAYING, options], fetchDataMovie)

// }

// export {fetchDataMovie, useMovieDataQuery}