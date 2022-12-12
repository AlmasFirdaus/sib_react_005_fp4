import React from 'react';

const CardMovie = ({ movie }) => {
  const { Title, Poster, Genre, imdbID, imdbRating } = movie;
  const handleDetail = () => {
    console.log(imdbID);
  };
  return (
    <div className="w-full relative transition-all ease-in-out duration-300 hover:scale-110 hover:cursor-pointer" onClick={handleDetail}>
      <img src={Poster} alt={Title} className="w-full object-scale-down" />
      <div className="bg-yellow-400 py-1 px-2 absolute top-0 right-0">
        <div className="flex flex-col justify-center items-center font-montserrat text-xs">
          <span className="font-medium">{imdbRating}</span>
          <span>IMDB</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-4">
        <h4 className="text-white">{Title}</h4>
        <p className="text-sm text-secoppacity">{Genre}</p>
      </div>
    </div>
  );
};

export default CardMovie;
