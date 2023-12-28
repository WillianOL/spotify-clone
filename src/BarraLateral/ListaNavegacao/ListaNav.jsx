import React from 'react';
import "./ListaNav.scss"
import { GoSearch, GoHomeFill, GoHeartFill } from 'react-icons/go';
import { MdOutlinePlaylistPlay, MdAddCircle } from 'react-icons/md';
import ItemLista from './ItemLista';

const ListaNav = () => {
  return (
    <ul className='listConteiner'>
      <ItemLista icone={<GoHomeFill />} texto="Home" classe="ativo" />
      <ItemLista icone={<GoSearch />} texto="Search" />
      <ItemLista icone={<MdOutlinePlaylistPlay />} texto="Library"/>
      <ItemLista icone={<MdAddCircle />} texto="Create Playlist" />
      <ItemLista icone={<GoHeartFill />} texto="Liked Songs" />
    </ul>
  );
};

export default ListaNav;
