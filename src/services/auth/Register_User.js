import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api_endpoint";

//unutk nge hit API
const RegisterUser = async (input) => {
  const { data } = await http
    .post(API_ENDPOINT.REGISTER_USER, input)
    .then((result) => {
      alert("Berhasil Regiter");
      window.location.href = "/Login";
      return data;
    })
    .catch((err) => {
      alert(err.response.data.message);
      throw err;
    });
};

const UseCreateUser = () => {
  return useMutation(RegisterUser);
};

export { RegisterUser, UseCreateUser };
