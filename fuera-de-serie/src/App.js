// import './App.css';
import Footer from './sections/Footer';
import CardLeft from './components/Cards/CardLeft';
import CardRight from './components/Cards/CardRight';
import CardImage from './components/Cards/CardImage';



function App() {
  return (
    <div className="App">
      <CardLeft/>
      <CardRight/> 
      <Footer/>      
    </div>
  );
}

export default App;
