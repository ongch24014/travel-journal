import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Card from './card/card';
import SoonCard from './soon-card/soon-card';
import {data, soon} from './data';

function App() {
  const places = data.map((item, index) => {
    return (
      <Card
        key={`card-${index}`}
        {... item}
      />
    )
  });

  const soons = soon.map((item, index) => {
    return (
      <SoonCard 
        key={`soon-${index}`}
        {... item}
      />
    )
  });

  return (
    <div className="App">
      <Header />
      <div className='card-list'>
        {places}
      </div>
      <h1 className="coming-soon">Coming Soon</h1>
      <div className='soon-list'>
        {soons}
      </div>
    </div>
  );
}

export default App;
