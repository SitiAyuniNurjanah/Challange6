import React from "react";
import { useNavigate } from "react-router-dom";
import movie4 from "../assets/img/movie4.jpg"


export const HomaPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen relative">
    <img
      src={movie4}
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
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      }}
    />
      <div className="flex justify-between absolute top-8 left-[6rem] transform-translate-x-2/4 z-10">
        <h1 className="text-red-600 text-5xl font-serif">Movie Viral</h1>
        <div className="flex ml-[38rem] space-x-4">
          <button
            className="bg-red-600 hover:bg-red-700 h-10 w-36 rounded-full text-white font-bold"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 h-10 w-36 rounded-full text-white font-bold"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center absolute left-[13rem] transform-translate-x-2/4 z-10"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <h1 className="text-4xl font-bold text-white">
          Semua Kisah Terpopuler di Indonesia dan Seluruh Dunia.
        </h1>
        <h1 className="text-4xl font-bold text-white mt-2">
          Jelajahi Dunia Perfilm-an Terbaik di Movie List.
        </h1>
        <p className="text-white font-mono text-xl mt-4">
          Siap Untuk Hiburan Terbaik? Tonton Kapan Saja dan di Mana Saja.
        </p>
        <p className="text-white font-mono text-xl mt-2">
          Ingin Mulai Menonton? Silahkan login terlebih dahulu untuk Memulai
          Pengalaman Menarik Anda.
        </p>
      </div>
    </div>
  );
};
