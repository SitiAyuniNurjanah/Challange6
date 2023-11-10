import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReduxDetailMovie } from "../services/movie/Get_Data_Detail_Movie";
import { useGetDataUser } from "../services/auth/Get_User";
import toast from "react-hot-toast";
import { CarouselItem } from "../assets/components/CarouselItem";
import { LogOut } from "../redux/actions/authLoginAction";
import { useDispatch } from "react-redux";

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [SearchData, setSearchData] = useState("");
  const [simpanDataSearch, setSimpanDataSearch] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleSimpanClick = () => {
    setSimpanDataSearch(SearchData);
    navigate(`/HasilSearch`, {
      state: {
        query: SearchData,
      },
    });
  };
  
  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSimpanClick();
    }
  };
  console.log(SearchData, "tesss");

  const [dataPopuler] = useState(1);

  const { data: fetchUser } = useReduxDetailMovie(dataPopuler);


  const renderDataPopuler = () => {
    const dataRender = fetchUser?.data?.slice(14, 19);

    return dataRender?.map((value) => (
      <div
        key={value.id}
        className="w-[20rem] h-[75%] mt-5 mx-4 flex flex-col hover:border border-emerald-50"
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
          className="w-full h-full"
        />
      </div>
    ));
  };

  const { data: isSuccess } = useGetDataUser({});

  if (isSuccess) {
    toast.success("Login Sukses");
  }

  return (
    <div className="bg-[#595959]  items-center flex flex-col space-y-5 top-0 ">
      <div className="w-[100%] relatif">
        <CarouselItem />
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center">
          <input
            type="text"
            className="w-[25rem] h-[2.5rem] bg-transparent shadow-md font-bold rounded-full border border-red-500"
            placeholder="What do you want to watch?"
            value={SearchData}
            onChange={handleSearchInputChange}
            onKeyDown={handleEnterPress}
          />
        </div>
      </div>
      <div className="    h-[35rem] w-[95%]  bg-white  rounded-[1rem] mb-10">
        <div className="pt-4  flex justify-between items-center px-4">
          <h2 className="font-bold text-[1.5rem]">Populer Movie</h2>
          <a
            href="/PopulerMovie"
            className="text-red-500 font-semibold text-[1.5em]"
          >
            See All Movie{" "}
          </a>
        </div>
        <div className="flex justify-between">{renderDataPopuler()}</div>
      </div>
      <button
        onClick={() => {
          dispatch(LogOut());
          navigate("/");
        }}
        className="bg-red-600 hover:bg-red-700 h-10 w-36 rounded-full text-white font-bold py-2 px-4 absolute top-1 right-10"
      >
        Logout
      </button>
      <h1 className="font-bold text-5xl sans-serif text-red-600 absolute left-10">
        Movie Popular 
      </h1>
    </div>
  );
};
