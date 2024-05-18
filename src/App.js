import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import {GlobalStyle} from './Components/NavBar/Styles'
import { Shop } from "./Pages/Shop/Shop";

function App() {
  return (
    <Router>
      <GlobalStyle/> {/* Resetando o css */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/cart"/>
      </Routes>
    </Router>
  );
}

export default App;
