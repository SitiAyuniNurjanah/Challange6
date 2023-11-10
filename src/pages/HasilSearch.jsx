import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMovieDataQuerySearch } from "../services/movie/Get_Data_Search_Movie";

export const HasilSearch = () => {
  const [PageNow] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  // State untuk menyimpan hasil pencarian
  const [searchData, setSearchData] = useState(null);

  // Ambil data pencarian dari location.state saat komponen dimuat
  useEffect(() => {
    if (location.state) {
      setSearchData(location.state.searchData);
    }
  }, [location.state]);

  const { query } = location.state;

  const { data: search, isLoading } = useMovieDataQuerySearch({
    page: PageNow,
    query: query,
  });

  // Update searchData saat data pencarian berubah
  useEffect(() => {
    if (search) {
      setSearchData(search);
    }
  }, [search]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const renderMovie = () => {
    if (!searchData || !searchData.data || searchData.data.length === 0) {
      return <p>No results found.</p>;
    }
    return searchData.data.map((value) => (
      <div
        key={value.id}
        className="w-[20rem] h-[35rem] mt-5 mx-4 flex flex-col hover:border border-emerald-50"
        onClick={() => {
          navigate(`/Render/${value.id}`, {
            state: {
              idMovie: value.id,
              // Menyimpan data hasil pencarian dalam location.state saat menavigasi ke halaman Render
              searchData: searchData,
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
    <div className=" bg-black h-full">
      <div className="flex justify-between items-center px-20">
        <h1 className="text-white text-[2rem] font-bold mt-3">
          Search Result For "{query}"
        </h1>
        <a
          href="/dashboard"
          className="text-white absolute mt-4 right-[4rem] bg-red-500 p-2 rounded-full"
        >
          Back to Home
        </a>
      </div>
      <div className="flex flex-wrap justify-center text-center text-white">
        {renderMovie()}
      </div>
    </div>
  );
};
