import React from "react";
import "./BarraLateral.scss"
import Logo from "./Logo/Logo";
import ListaNav from "./ListaNavegacao/ListaNav";
import Sobre from "./Sobre/Sobre";


const BarraLateral = () => {
  return (
    <aside className="barraLateral" >
      <Logo />
      <ListaNav />
      <Sobre />
    </aside>
  )
}

export default BarraLateral