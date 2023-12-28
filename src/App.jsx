import React from "react"
import "./App.scss"
import BarraLateral from "./BarraLateral/BarraLateral"
import MusicasConteiner from "./MusicasConteiner/MusicasConteiner"

function App() {
  return (
    <>
      <BarraLateral ativo={false} />
      <MusicasConteiner />
    </>
  )
}

export default App
