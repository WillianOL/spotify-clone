import React from 'react';
import Destaque from './Destaque';
import "./SectionMusic.scss"
import Playlist from './Playlist';

const SectionMusic = () => {
  return (
    <main className='musics_conteiner'>
      <Destaque titulo="Focus" />
      <Playlist titulo="Spotify Playlists" />
    </main>
  )
}

export default SectionMusic;