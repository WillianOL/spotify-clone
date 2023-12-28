import React from 'react';
import './ListaPrivacy.scss';

const listaItens = [
  ['Legal', 'Privacy Center', 'Privacy Policy'],
  ['Cookies', 'About', 'Ads'],
];

const ListaPrivacy = () => {
  const lista = listaItens.map((item) => {
    return (
      <li key={item[0]}>
        {item.map((itemList, index) => (
          <p key={itemList[index]}>{itemList}</p>
        ))}
      </li>
    );
  });

  return <ul className="privacy_conteiner">{lista}</ul>;
};

export default ListaPrivacy;
