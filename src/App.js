import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Homepage from './pages/Homepage';
import { getMovies } from './redux/features/movieSlice';

function App() {
  const { movies } = useSelector((store) => store.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    if (movies.length === 0) {
      dispatch(getMovies());
    }
  }, [dispatch, movies]);

  return (
    <div className="bg-secblack">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
