import Header from './components/Header';
import TechBar from './components/TechBar';
import Begginnings from './components/Beginnings';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <TechBar />
      </header>
      <Begginnings />
    </div>
  );
}

export default App;
