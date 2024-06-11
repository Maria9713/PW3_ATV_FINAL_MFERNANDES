import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cadastrar from './Pages/Cadastrar';
import Lista_Turmas from './Pages/Lista_Turmas';
import Edt_Turma from './Pages/Edt_Turma';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cadastrar" element={<Cadastrar/>} />
        <Route path="/Turmas" element={<Lista_Turmas/>} />
        <Route path="/Edt_Turma/:id" element={<Edt_Turma/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
