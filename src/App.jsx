import Header from './components/Header/Header';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <HeroCarousel />
      </main>
    </div>
  );
}

export default App;
