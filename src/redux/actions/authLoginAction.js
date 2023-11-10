import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { setIsLoggedIn, setToken } from "../reducers/auth/authLoginReducers";
import { reduxLoginUser } from "../../services/auth/Login_User"

export const LoginUser = (input) => (dispatch) => {
    reduxLoginUser(input).then((result) => {
        console.log(result, "result")
        CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
        dispatch(setToken(result.data.data.token));
        dispatch(setIsLoggedIn(true));

        window.location.href = '/dashboard';
    }).catch((err) => {
        console.log(err, "err")
    });
}

export const LogOut = (input) => (dispatch) => {
    dispatch(setToken(undefined));
    CookieStorage.remove(CookieKeys.AuthToken)
}