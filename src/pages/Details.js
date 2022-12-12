import React from "react";
import CartFilm from "../component/navbar/CartFilm";

const Details = () => {
    return (
        <section id="details" className="container p-10">
            <div className="md:flex">
                <div className="max-w-[28rem] lg:pr-28 md:p-5 justify-center ">
                    <img
                        className="rounded-xl max-h-[400px]"
                        src="https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SX300.jpg"
                        alt="gbr1"
                    />
                </div>
                <div className="max-w-[28rem] p-5">
                    <h1 className="pb-3 lg:text-3xl md:text-3xl sm:text-xl font-medium">
                        The Batman
                    </h1>
                    <p className="py-2 text-[1rem]">Action | Crime | Drama</p>
                    <p className="py-2 text-[1rem]">IMDb: 7.9 (imdb rating)</p>
                    <p className="py-2 text-[1rem]">2h 26m (runtime)</p>
                    <p className="py-2 text-[1rem]">16+ (rated)</p>
                    <p className="py-2 text-[1rem]">USA, 2022 (country)</p>
                    <p className="py-2 text-[1rem] text-grey">
                        <span className="font-semibold text-white">
                            Director :{" "}
                        </span>
                        (director)
                    </p>
                    <p className="py-2 text-[1rem] text-grey">
                        <span className="font-semibold text-white">
                            Actors :{" "}
                        </span>
                        (actors)
                    </p>
                    <div className="pt-3 flex">
                        <div>icon bookmark</div>
                        <div>icon download</div>
                        <div>ison share</div>
                        <div>button watch trailer</div>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <h1 className="text-xl py-2">Descriptions</h1>
                <p className="text-grey text-lg py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="p-5">
                <h1 className="text-2xl py-8">Recommendation</h1>
                <div className="grid justify-center md:grid-cols-2 md:gap-8 xl:grid-cols-4">
                    <CartFilm/>
                    <CartFilm/>
                    <CartFilm/>
                    <CartFilm/>
                    <CartFilm/>
                    <CartFilm/>
                    <CartFilm/>
                </div>
            </div>
        </section>
    );
};

export default Details;
