import React from "react";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useNavigate } from "react-router-dom";
import { useDataPopularMovie } from "../../services/movie/Get_Data_Movie_Popular";

export const CarouselItem = (props) => {
  const navigate = useNavigate();
  const [PageNow] = useState(1);

  const { data: fetchUser } = useDataPopularMovie({
    page: PageNow,
  });

  console.log(fetchUser, "data");

  const renderMovieList = () => {
    return fetchUser?.data?.map((value) => (
      <div
        key={value.id}
        className="w-[100vw] h-[100vh] flex flex-col relative"
      >
        <div
          className=" w-full relative bg bg-center bg-cover bg-no-repeat min-h-screen bg-blend-soft-light bg-gray-800"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${value.backdrop_path}')`,
          }}
        >
          <div className=" flex justify-between px-10 p-2">
            <div></div>
          </div>

          <div className=" h-full w-[50%] ml-7 flex flex-col justify-center items-start space-y-3">
            <h2 className=" font-bold text-[2.5em] text-white ">
              {value.title}
            </h2>
            <h2 className="text-white text-start">{value.overview}</h2>

            <button
              onClick={() => {
                navigate(`/Render/${value.id}`, {
                  state: {
                    idMovie: value.id,
                  },
                });
              }}
              className="bg-red-600 hover:bg-red-700 h-10 w-50 rounded-full text-white font-bold"
            >
              <div className="flex justify-between px-3">
                <span>Watch Trailer</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        stopOnHover={false}
      >
        {renderMovieList()}
      </Carousel>
    </div>
  );
};