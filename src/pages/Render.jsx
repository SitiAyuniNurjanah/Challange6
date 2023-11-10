import React, { useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useReduxDetailMovie } from "../services/movie/Get_Data_Detail_Movie";
import { useGetDataUser } from "../services/auth/Get_User";

export const Render = () => {
  const location = useLocation();
  const { id } = useParams();
  const videoRef = useRef(null);
  const navigate = useNavigate();


  const { data: movieData, isLoading, isError } = useReduxDetailMovie(id);

  const { data: UserGetMe } = useGetDataUser({});
  console.log(UserGetMe, "ini akun");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading movie data.</p>;
  }
  console.log(movieData, "omaa");
  const renderTrailer = () => {
    const datarender = movieData?.data?.videos?.slice(0, 8);
    if (!datarender || datarender.length === 0) {
      return (
        <p className="text-center font-bold text-[2rem] w-full">
          No trailer available.
        </p>
      );
    }

    return datarender?.map((value, index) => (
      <div key={index} className=" w-auto h-auto m-8 ">
        <YouTube
          videoId={value.key}
          opts={{ width: "240px", height: "135px" }}
        />
      </div>
    ));
  };
  console.log(movieData, "teeess");
  return (
    <div className="h-screen relative bg-black overflow-y-auto ">
      <div
        className=" bg-center bg-cover bg-no-repeat bg-opacity w-full h-full flex items-center justify-center bg-blend-soft-light bg-gray-700"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movieData?.data?.backdrop_path}')`,
        }}
      >
        <button 
        className="w-[6rem] h-[2rem] bg-red-500 hover:bg-red-600 text-white rounded-full absolute top-0 right-4 m-4"
        onClick={() => {
          navigate(-1);
        }}>
          Back
        </button>
        
        <div className=" w-[50%] h-[50%] flex ">
          <div className=" h-[100%] w-[30%] text-white">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieData?.data?.poster_path}`}
              className="w-full h-full"
            />
          </div>

          <div className="h-[100%] w-[70%] text-white flex flex-col justify-center space-y-2 pl-4">
        <h1 className="text-[3rem] font-bold">{movieData?.data?.title}</h1>
        <div className="flex">
          {movieData?.data?.genres?.map((value) => (
            <button
              key={value.id}
              className="bg-transparent border-solid border-[3px] border-white text-white w-auto h-auto p-2 rounded-full m-1"
            >
              {value.name}
            </button>
          ))}
        </div>
        <h1>Release Date: {movieData?.data?.release_date}</h1>
        <p className="flex-grow">{movieData?.data?.overview}</p>
        <p>Rating: {movieData?.data?.vote_average.toFixed(2)} / 10</p>
        <button
          className="bg-red-500 hover-bg-red-600 text-white w-32 h-8 rounded-full"
          onClick={() => {
            videoRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Watch Trailer
        </button>
      </div>
    </div>
  </div>
      <div className="text-center mt-4">
        <h1 className="text-[2rem] text-white font-bold">Trailer</h1>
      </div>
      <div
        ref={videoRef}
        className="flex flex-wrap justify-center text-center text-white h-[2rem] w-full"
      >
        {renderTrailer()}
        <div className="h-[4rem] w-[10rem] flex items-center space-x-2 justify-evenly"></div>
      </div>
    </div>
  );
};