import React from "react";
import ListaNav from "../../../BarraLateral/ListaNavegacao/ListaNav";
import "./MenuMobile.scss"

const MenuMobile = ({ ativo }) => {
  return (
    <div className="menuMobile" style={{display: ativo ? "flex" : "none"}}>
      <ListaNav />
    </div>
  )
}

export default MenuMobile;