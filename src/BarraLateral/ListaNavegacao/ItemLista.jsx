import React from 'react'

const selecionar = ({ target }) => {
  const conteinerPai = target.parentElement.querySelectorAll("li")
  conteinerPai.forEach(item => item.classList.remove("ativo"))
  target.classList.add("ativo")
  return target
}

const ItemLista = ({classe, icone, texto}) => {
  return (
    <li onClick={selecionar} className={classe}>
      <span>{icone}</span>
      {texto}
    </li>
  )
}

export default ItemLista
