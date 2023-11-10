import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api_endpoint";
// import { http2 } from "../../utils/http2";
import http from "../../utils/http";

export const reduxDetailMovie = async (id) => {
  const { data } = await http.get(`${API_ENDPOINT.MOVIE_DETAIL}${id}?append_to_response=videos`);
  return data
};

export const useReduxDetailMovie = (id) => {
  return useQuery({
    queryKey: ["movieData", id],
    queryFn: () => reduxDetailMovie(id),
  });
};
