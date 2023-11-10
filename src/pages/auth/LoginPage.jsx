import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/actions/authLoginAction";
import movie7 from "../../assets/img/movie7.jpg";
import { GoogleLogin } from "../../assets/components/GoogleLogin";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  const registerUser = () => {
    dispatch(
      LoginUser({
        email: Email,
        password: Password,
      })
    );
  };

  return (
    <div className="h-screen relative">
      <img
        src={movie7}
        alt="bg"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      />
      <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[40rem] bg-black bg-opacity-50 backdrop-blur-100 flex flex-col items-center justify-center text-white rounded-2xl">
        <div className="bg-white bg-opacity-30 backdrop-blur-100 w-[5rem] h-[5rem] rounded-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="3rem"
            height="3rem"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <h1 className="text-3xl text-white font-mono mt-4">SIGN IN</h1>
        <span className="text-xl mt-3 text-white font-mono">
          Masuk dan Lihat Movie Yang Sedang Populer Saat ini
        </span>
        <input
          onChange={handleInput}
          id="email"
          className="border w-[17rem] h-[2.5rem] mt-10 rounded-lg bg-white bg-opacity-30 backdrop-blur-100 pl-2 placeholder-white"
          placeholder="Email"
        />

        <input
          onChange={handleInput}
          id="password"
          className="border w-[17rem] h-[2.5rem] mt-5 rounded-lg bg-white bg-opacity-30 backdrop-blur-100 pl-2 placeholder-white"
          type="password"
          placeholder="Password"
        />

        <button
          className="border bg-transparent w-[17rem] h-[2.3rem] mt-7 hover:bg-blue-900 text-white font-mono font-semibold rounded-xl"
          onClick={registerUser}
        >
          LOGIN
        </button>
        <div className="mt-4 justify-center flex">
          <GoogleLogin/>
        </div>
        <div className="font-mono mt-1">
          <span>Belum Punya Akun? ayoo  
            <a className="cursor-pointer font-mono font-semibold hover:text-red-500" onClick={() => navigate("/register")}> Register </a>
            dulu
          </span>
        </div>
      </div>
    </div>
  );
};
