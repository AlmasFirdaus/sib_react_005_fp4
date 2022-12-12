import './App.css';
import Footer from './component/footer/Footer';
import Navbar from './component/navbar/Navbar';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <Navbar />
      <Details/>
      <Footer/>
    </div>
  );
}

export default App;
