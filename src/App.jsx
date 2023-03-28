import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/projetosrj" element={<Home />} />
      <Route exact path="/" element={<Navigate replace to="/projetosrj" />} />
    </Routes>
  );
}

export default App;
