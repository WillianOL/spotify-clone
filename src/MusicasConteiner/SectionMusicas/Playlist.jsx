import React from 'react'
import CardMusic from './CardMusic/CardMusic'
import "./SectionMusic.scss"

const Playlist = ({ titulo }) => {
  return (
    <section className='sectionMusic'>
      <div>
        <h1>{titulo}</h1>
        <span>Show All</span>
      </div>
      <ul>
      <CardMusic
          img="../../../public/img-playList/playlist-01.png"
          titulo="Today’s Top Hits"
          descricao="Harry Styles is on top of the Hottest 50!"
        />
        <CardMusic
          img="../../../public/img-playList/playlist-02.png"
          titulo="RapCaviar"
          descricao="New music from Lil Baby, Gucci Mane and DaBaby."
        />
        <CardMusic
          img="../../../public/img-playList/playlist-03.png"
          titulo="All Out 2010s"
          descricao="The biggest songs of the 2010s."
        />
        <CardMusic
          img="../../../public/img-playList/playlist-04.png"
          titulo="Rock Classics"
          descricao="Rock legends & epic songs that continue to inspire..."
        />
        <CardMusic
          img="../../../public/img-playList/playlist-05.png"
          titulo="Chill Hits"
          descricao="Kick back to the best new and recent chill hits."
        />
      </ul>
    </section>
  )
}

export default Playlist
