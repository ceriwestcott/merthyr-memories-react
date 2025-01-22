import './App.css';
import Navigation from './components/Navigation';
import SplashPage from './components/SplashPage';
import Locations from './components/Locations';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashGallery from './components/SplashGallery';
import Stories from './components/Stories';
function App() {
  return (
    <div className="App" data-theme="light">
      <BrowserRouter>
        <Navigation />
        <main className="p-4 pt-20">
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/gallery" element={<SplashGallery />} />
            <Route path="/stories" element={<Stories />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;