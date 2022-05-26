import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, id }) => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => setmovies(res.data.results));
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="left-0 bg-white rounded-full opacity-50 hover:opacity-100 absolute cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + id}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
        >
          {movies.map((movie, id) => (
            <Movie key={id} movie={movie} id={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full opacity-50 hover:opacity-100 absolute cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
