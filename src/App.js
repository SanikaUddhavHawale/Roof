import './App.css';
import {Routes, Route } from "react-router";
import Home from './Components/Home'
import Experiences from './Components/Experiences';
import Stays from './Components/Stays'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Experiences" element={<Experiences />} />
      <Route path="/Stays" element={<Stays />} />
    </Routes>
  );
}

export default App;
