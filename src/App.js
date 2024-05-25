import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import {GlobalStyle} from './Components/NavBar/Styles'
import { Shop } from "./Pages/Shop/Shop";
import { Cart } from "./Pages/Cart/Cart";
import { Footer } from "./Components/Footer/Footer";
import { ShopContextProvider } from "./Context/ShopContext";

function App() {
  return (
    <Router>
      <ShopContextProvider>
        <GlobalStyle/> {/* Resetando o css */}
        <NavBar/>
          <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        <Footer/>
      </ShopContextProvider>
    </Router>
  );
}

export default App;
