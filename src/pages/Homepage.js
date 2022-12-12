import React, { useEffect, useState } from 'react';
import { pikachu } from '../assets/images';
import ContainerMovie from '../component/ContainerMovie/ContainerMovie';
import { HiOutlineBookmark, HiBookmark } from 'react-icons/hi';
import { movie } from '../constant/data';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const m = movie.Runtime.split(' ', 1);
    setHour(Math.floor(m / 60));
    setMinute(m % 60);
  }, []);
  return (
    <section className="w-full h-screen bg-cover bg-no-repeat relative" style={{ backgroundImage: `url(${pikachu})` }}>
      <div className="bg-gradient-to-b from-transparent to-secblack h-screen" />
      <div className="container flex items-center text-white font-montserrat h-screen absolute top-0">
        <div className=" w-1/2 flex flex-col">
          <h2>{movie.Genre}</h2>
          <h1 className="font-medium text-5xl py-6">{movie.Title}</h1>
          <p className="mb-4">{movie.Plot}</p>
          <div className="text-sm flex gap-8 items-center">
            <p className="">
              IMDB : <span className="font-medium">{movie.imdbRating}</span>
            </p>
            <p className="">
              {hour} h {minute} m
            </p>
          </div>
          <div className="flex items-center space-x-6 mt-14">
            <Link to="/detail" className="px-6 py-2 border border-primary font-semibold text-primary rounded-sm transition-all ease-in-out duration-300 hover:bg-white">
              Detail
            </Link>
            {isSaved ? (
              <button onClick={() => setIsSaved(false)}>
                <HiBookmark size={32} color="#DE5D83" />
              </button>
            ) : (
              <button onClick={() => setIsSaved(true)}>
                <HiOutlineBookmark size={32} color="#DE5D83" />
              </button>
            )}
          </div>
        </div>
      </div>

      <ContainerMovie />
    </section>
  );
};

export default Homepage;
