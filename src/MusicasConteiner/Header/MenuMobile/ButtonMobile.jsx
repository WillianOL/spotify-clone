import React from "react"
import { IoMenu, IoClose } from "react-icons/io5";
import "./ButtonMobile.scss"

const ButtonMobile = ({ ativo, setAtivo }) => {
  let Icone;
  function abrirMenu() {
    setAtivo(!ativo)
  }
  if(ativo) {
    Icone = IoClose
  } else {
    Icone = IoMenu
  }
  
  return (
    <button onClick={abrirMenu} className="botaoMobile">
      <Icone />
    </button>
  )
}

export default ButtonMobile