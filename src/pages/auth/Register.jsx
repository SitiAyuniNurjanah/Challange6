import React from "react";
import { useState } from "react";
// import { UseCreateUser } from '../../services/auth/register-user'
// import { useNavigate } from 'react-router-dom'
import { UseCreateUser } from "../../services/auth/Register_User";
import movie7 from "../../assets/img/movie7.jpg";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const { mutate: registerUser, error } = UseCreateUser();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "username") {
        setUsername(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  const regisUser = () => {
    registerUser({
      email: Email,
      name: Username,
      password: Password,
    });
  };

  console.log(Username, "Username");
  console.log(Email, "Email");
  console.log(Password, "Password");

  if (error) {
    console.log(error.response.data.message, "error tess");
  }

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      regisUser();
    }
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

      <div
        className=" h-[30rem] w-[40rem] bg-black bg-opacity-30 backdrop-blur-100 flex flex-col items-center justify-center text-white rounded-2xl"
        style={{
          position: "absolute",
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)", 
          zIndex: 1, 
        }}
      >
        <h1 className="text-white font-bold text-[2rem]">Register</h1>
        <div className="flex flex-col space-y-4 items-center w-full">
          <input
            onChange={handleInput}
            placeholder="username"
            id="username"
            className="border-[1px] w-[80%] mt-5 py-3 px-5 block border-gray-200 rounded-xl bg-transparent text-white text-lg "
            type="text"
          />
          <input
            onChange={handleInput}
            placeholder="email"
            id="email"
            className="border-[1px] w-[80%] py-3 px-5 block border-gray-200 rounded-xl bg-transparent text-white text-lg "
            type="text"
          />
          <input
            onChange={handleInput}
            placeholder="password"
            id="password"
            className="border-[1px] w-[80%] py-3 px-5 block border-gray-200 rounded-xl bg-transparent text-white text-lg "
            type="password"
            onKeyPress={handleEnterPress}
          />
        </div>
        <button
          className="bg-gray-50 hover:bg-gray-200 text-black h-[2.8rem] w-[80%] rounded-xl mt-5"
          onClick={() => {
            regisUser();
          }}
        >
          Register
        </button>
        <div className="font-mono mt-1">
          <span> Mau kembali ke login ? Klik 
            <a className="cursor-pointer font-mono font-semibold hover:text-red-500" onClick={() => navigate("/login")}> Aku</a>
          </span>
        </div>
      </div>
    </div>
  );
};
