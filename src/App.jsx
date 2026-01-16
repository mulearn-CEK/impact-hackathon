import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Day1 from './pages/Day1';
import Day2 from './pages/Day2';
import SchedulePage from './pages/Schedule';
import RegisterPage from './pages/Register';
import MouseHalo from './components/MouseHalo';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background-dark text-white overflow-x-hidden transition-colors duration-300">
        <MouseHalo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day1" element={<Day1 />} />
          <Route path="/day2" element={<Day2 />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
