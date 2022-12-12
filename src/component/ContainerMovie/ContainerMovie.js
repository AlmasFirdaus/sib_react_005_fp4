import React from 'react';
import CardMovie from '../CardMovie/CardMovie';
// import { movies } from '../../constant/movies';
import { useSelector } from 'react-redux';

const ContainerMovie = () => {
  const { movies } = useSelector((store) => store.movie);
  return (
    <section className="bg-secblack min-h-screen pt-20 pb-28" id="movie">
      <div className="container ">
        <h3 className="text-white text-3xl py-6">New releases</h3>
        <div className="flex flex-col">
          <div className="grid gap-7 md:grid-cols-4 xl:grid-cols-5">{movies && movies.map((movie, index) => <CardMovie movie={movie} key={index} />)}</div>
        </div>
      </div>
    </section>
  );
};

export default ContainerMovie;
