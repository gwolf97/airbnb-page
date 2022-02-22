import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from "./data/data"
import TrustIcons from './components/TrustIcons';

function App() {

  const cards = data.map(item =>{
    return(
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        price={item.price}
        title={item.title}
      />
    )
  })

  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <div className="card-section">
      {cards}
      </div>
      <TrustIcons/>
    </div>
  );
}

export default App;
