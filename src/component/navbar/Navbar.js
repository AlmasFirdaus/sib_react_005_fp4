import { Link, useNavigate } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [searchInput, setSearchInput] = useState('');
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');

  const searchChange = (e) => {
    setSearchInput(e.target.value.replace(' ', '-'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${searchInput}`);
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    // Navbar Fixed
    window.onscroll = function () {
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;
      const toTop = document.querySelector('#to-top');

      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        // toTop.classList.remove('hidden');
        // toTop.classList.add('flex');
      } else {
        header.classList.remove('navbar-fixed');
        // toTop.classList.remove('flex');
        // toTop.classList.add('hidden');
      }
    };

    if (hamburger) {
      window.addEventListener('click', function (e) {
        if (e.target !== hamburger && e.target !== navMenu) {
          hamburger.classList.remove('hamburger-active');
          navMenu.classList.add('hidden');
        }
      });
    }
  });

  const hamburgerCLick = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    // Hamburger
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ">
      <div className="container px-10 xl:px-20 py-4">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <span className="font-libre text-white text-3xl">Movie</span>
          </div>
          <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" onClick={hamburgerCLick} className="block absolute right-4 lg:hidden">
              <span className="hamburger-line origin-top-left transition duration-300"></span>
              <span className="hamburger-line transition duration-300"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300"></span>
            </button>

            <nav id="nav-menu" className="hidden absolute py-5 lg:py-2 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
              <div className="block lg:flex lg:items-center">
                <ul className="block lg:flex space-x-10">
                  <li className="group">
                    <a href="#home" className="text-white">
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a href="#movies" className="text-white">
                      Movies
                    </a>
                  </li>
                  <li className="group">
                    <a href="#mylist" className="text-white">
                      My List
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <form onSubmit={handleSubmit} className="mx-6 flex">
            <input type="text" onChange={searchChange} className="text-base border border-primary border-opacity-50 rounded-lg mr-3 px-2 w-1/2" />
            <button className="py-1 px-3 w-1/2 md:w-1/3 bg-primary rounded-lg shadow-sm text-white transition duration-200 hover:brightness-125">Search</button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
