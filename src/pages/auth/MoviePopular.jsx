import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useMovieDataPopulerQueryBinar } from '../services/API-BINAR/get-data-movie-populer-binar'
// import { useGetDataUser } from '../services/auth/get_user'
import { useDataPopularMovie } from "../../services/movie/Get_Data_Movie_Popular";
import { useGetDataUser } from "../../services/auth/Get_User";

export const MoviePopular = () => {
  const [PageNow, setPageNow] = useState(1);
  const navigate = useNavigate();
  const { data: fetchUser } = useDataPopularMovie({
    page: PageNow,
  });

  const { data: UserGetMe } = useGetDataUser({});
  console.log(UserGetMe, "ini akun");

  const renderDataPupuler = () => {
    return fetchUser?.data?.map((value) => (
      <div
        key={value.id}
        className="w-[20rem] h-[35rem] mt-5 mx-4 flex flex-col hover:border border-emerald-50  "
        onClick={() => {
          navigate(`/Render/${value.id}`, {
            state: {
              idMovie: value.id,
            },
          });
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${value.poster_path}`}
          alt={value.title}
          className="w-full h-auto"
        />
        <h2 className="mt-2 text-center ">{value.title}</h2>
      </div>
    ));
  };

  return (
    <div className=" bg-black">
      <div className=" flex justify-between px-10">
        <h1 className="text-white text-[2rem] font-bold mt-4">Popular Movie</h1>
        <a
          href="/dashboard"
          className="text-white absolute top-2 right-10 bg-red-500 p-2 rounded-full mt-4"
        >
          Back to Home
        </a>
      </div>
      <div className="flex flex-wrap justify-center text-center text-white">
        {renderDataPupuler()}
      </div>

      <div className="h-[4rem] w-[40rem]  flex items-center space-x-2 justify-evenly text-white w-full text-center text-[2rem]">
        <button
          onClick={() => {
            PageNow > 1 && setPageNow(PageNow - 1);
          }}
        >
          {" "}
          Back
        </button>
        <h1>{PageNow}</h1>
        <button
          onClick={() => {
            setPageNow(PageNow + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
