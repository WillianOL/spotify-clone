import React from 'react'
import "./CardMusic.scss"
import PlayButton from './PlayButton'

const CardMusic = ({ img, titulo, descricao }) => {
  return (
    <li className='card'>
      <PlayButton/>
      <img src={img} alt="Imagem da Musica" />
      <div>
        <h2 className="tituloCard">{titulo}</h2>
        <p className="descricao">{descricao}</p>
      </div>
    </li>
  )
}

export default CardMusic
