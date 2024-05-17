import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import {GlobalStyle} from './Components/NavBar/Styles'

function App() {
  return (
    <Router>
      <GlobalStyle/> {/* Resetando o scc */}
      <NavBar/>
      <Routes>
        <Route path="/"/>
        <Route path="/cart"/>
      </Routes>
    </Router>
  );
}

export default App;
