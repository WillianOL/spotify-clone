import React from "react";
import "./MusicasConteiner.scss"
import Header from "./Header/Header";
import SectionMusic from "./SectionMusicas/SectionMusic";

const MusicasConteiner = () => {
  return (
    <main className="musicas_conteiner">
      <Header />
      <SectionMusic />
    </main>
  )
}

export default MusicasConteiner;