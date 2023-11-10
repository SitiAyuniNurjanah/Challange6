import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api_endpoint";
import http from "../../utils/http";

export const DataUser = async () => {
  try {
    const response = await http.get(API_ENDPOINT.GET_USER);
    const userData = response.data.data;
    return {
      data: {
        userNama: userData.name,
        email: userData.email,
      },
    };
  } catch (error) {
    if (error.response && error.response.status === 401) {
      window.location.href = "/";
    } else {
      console.error(error);
      throw error;
    }
  }
};

export const useGetDataUser = () => {
  return useQuery({
    queryKey: ["useGetDataUser"],
    queryFn: DataUser,
  });
};