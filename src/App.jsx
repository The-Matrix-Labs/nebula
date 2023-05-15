import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import React, { useRef } from "react";


function App() {
  const home = useRef(null)
  const about = useRef(null)
  const token = useRef(null)
  const road = useRef(null)
  const team = useRef(null)
  const partners = useRef(null)
  return (
    <Routes>
        <Route path="*" element={<Home home={home} about={about} token={token} road={road} team={team} partners={partners}/>} />
      </Routes>
  );
}

export default App;
