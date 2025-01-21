import './App.css';
import Navigation from './components/Navigation';
import SplashPage from './components/SplashPage';
import Locations from './components/Locations';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
