import React from 'react';
import './ListaPrivacy.scss';

const ListaPrivacy = () => {
  // Lista de itens para serem adicionados
  const listaItens = [
    ['Legal', 'Privacy Center', 'Privacy Policy'],
    ['Cookies', 'About', 'Ads'],
  ];

  return (
    <ul className="privacy_conteiner">
      {listaItens.map((lista) => {
        return (
          <li key={lista}>
            {lista.map((itemLista) => {
              return <p key={itemLista}>{itemLista}</p>;
            })}
          </li>
        );
      })}
    </ul>
  );
};

export default ListaPrivacy;
