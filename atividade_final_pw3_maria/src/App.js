import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cadastrar from './Pages/Cadastrar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Cadastrar" element={<Cadastrar/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
