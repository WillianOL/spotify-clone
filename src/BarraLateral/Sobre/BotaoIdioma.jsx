import React from 'react';
import "./BotaoIdioma.scss"
import { BsGlobe } from 'react-icons/bs'

const BotaoIdioma = ({ idioma }) => {
  return (
    <div className='botao_idioma'>
      <button>
        <BsGlobe />
        {idioma}
      </button>
    </div>
  )
};

export default BotaoIdioma;
