import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api_endpoint";
import http from "../../utils/http";
import { CookieKeys, CookieStorage } from "../../utils/cookies";

export const reduxLoginUser = async (input) => {
    return await http.post(API_ENDPOINT.LOGIN_USER, input)
}

const LoginUser = async (input) => {
    return await http.post(API_ENDPOINT.LOGIN_USER, input).then((result) => {
        CookieStorage.set(CookieKeys.AuthToken, result.data.data.token)
        return result
    }).catch((err) => {

    });;
}

const useLoginUser = () => {
    return useMutation(LoginUser)
};

export { LoginUser, useLoginUser }
