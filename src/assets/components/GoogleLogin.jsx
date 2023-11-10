import { useDispatch } from 'react-redux';
import { API_ENDPOINT } from '../../utils/api_endpoint';
import axios from 'axios';
import { CookieKeys, CookieStorage } from '../../utils/cookies';
import { setToken } from '../../redux/reducers/auth/authLoginReducers';
import { useGoogleLogin } from '@react-oauth/google';

export const GoogleLogin = () => {
    const dispatch = useDispatch();

     const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url:  `${process.env.REACT_APP_SERVER}${API_ENDPOINT.GOOGLE_LOGIN}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      CookieStorage.set(CookieKeys.AuthToken, token);
      dispatch(setToken(token));

    //   Navigate("/dashboard");
      window.location.href = "/dashboard";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response.data.message);
        return;
      }
    }
  };

  const loginWithGoogle = useGoogleLogin({
    client_id: "926938779780-02t86g4d719ngqp0c493fmq68j1iltql.apps.googleusercontent.com",
    onSuccess: (responseGoogle) =>
      registerLoginWithGoogleAction(responseGoogle.access_token),
  });

  return (
    <button
            onClick={loginWithGoogle}
            className="border bg-transparent w-[17rem] h-[2.3rem] mt-1 hover:bg-white hover:text-black text-white font-mono font-semibold rounded-xl"
          >
            Login With Google
          </button>
  )
}
