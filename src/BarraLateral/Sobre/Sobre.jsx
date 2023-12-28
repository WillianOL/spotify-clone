import React from "react";
import ListaPrivacy from "./ListaPrivacy";
import "./Sobre.scss"
import BotaoIdioma from "./BotaoIdioma";

const Sobre = () => {
  return (
    <section className="sobre_conteiner">
      <ListaPrivacy />
      <BotaoIdioma idioma="English" />
    </section>
  )
}

export default Sobre