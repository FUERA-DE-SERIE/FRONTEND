// import './App.css';
import CardImage from './components/Cards/CardImage';
import Home from './components/pages/home/Home';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <CardImage/>
      <Home/>
      <Footer/>       
    </div>
  );
}

export default App;
