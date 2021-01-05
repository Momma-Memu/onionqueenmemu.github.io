import Header from './components/Header';
import TechBar from './components/TechBar';
import Begginnings from './components/Beginnings';
import Projects from './components/Projects';
import Descriptions from './components/Descriptions';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <TechBar />
      </header>
      <Begginnings />
      <Projects />

      <Footer />
    </div>
  );
}

export default App;
