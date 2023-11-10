// import { API_ENDPOINT } from "../../utils/api_endpoint"
// import http from "../../utils/http";
// // import { http2 } from "../../utils/http2"

// export const reduxMovieSearch = async (query) => {
//     const { data } = await http.get(`${API_ENDPOINT.MOVIE_SEARCH}?query=${query}`);
//     return data;
// }


import { useQuery } from "@tanstack/react-query"
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api_endpoint";
// import http2 from "../../utils/http2";

    const fetchDataMovieSearch = async ({queryKey}) => {
    const [_key, _params] = queryKey;
    const { data } = await http.get(_key, { params : _params})
    return data
}

const useMovieDataQuerySearch = (options) => {
    return useQuery({
      queryKey: [API_ENDPOINT.MOVIE_SEARCH, options],
      queryFn: fetchDataMovieSearch,
    });
  };
  
export {fetchDataMovieSearch, useMovieDataQuerySearch}