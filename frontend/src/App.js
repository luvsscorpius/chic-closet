import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import {GlobalStyle, FadeInContainer, FadeOutContainer} from './Components/NavBar/Styles'
import { Shop } from "./Pages/Shop/Shop";
import { Cart } from "./Pages/Cart/Cart";
import { Footer } from "./Components/Footer/Footer";
import { ShopContextProvider } from "./Context/ShopContext";
import { CookiePopUp } from "./Components/CookiePopUp/CookiePopUp";

function App() {
  // Resolvendo o problema de não atualizar o contexto toda vez que mudar de rota
  // Usando o location para obter a localização exata da rota
  const location = useLocation()
  // Aqui usaremos o useState e passar a localização com a propriedade pathnome para pegar apenas o nome da rota
  const [contextKey, setContextKey] = useState(location.pathname)

  // Aqui usaremos o useEffect para atualizar o useState sempre que a propriedade pathname mudar
  useEffect(() => {
    setContextKey(location.pathname)
  }, [location.pathname])

  return (
    // Atualiza o shopContextProvider com uma chave única forçando a remontagem sempre que a rota mudar
    <ShopContextProvider key={contextKey}>
      <GlobalStyle /> {/* Resetando o css */}
      <NavBar />
      <CookiePopUp/>
      <Routes>
        <Route path="/" element={<FadeInContainer><Shop /> </FadeInContainer>} />
        <Route path="/cart" element={<FadeOutContainer><Cart /></FadeOutContainer>} />
      </Routes>
      <Footer />
    </ShopContextProvider>
  );
}

export default App
