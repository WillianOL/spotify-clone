import React from 'react'
import CardMusic from './CardMusic/CardMusic'
import "./SectionMusic.scss"

import img1 from "./imgs/img-playList/playlist-01.png"
import img2 from "./imgs/img-playList/playlist-02.png"
import img3 from "./imgs/img-playList/playlist-03.png"
import img4 from "./imgs/img-playList/playlist-04.png"
import img5 from "./imgs/img-playList/playlist-05.png"

const Playlist = ({ titulo }) => {
  return (
    <section className='sectionMusic'>
      <div>
        <h1>{titulo}</h1>
        <span>Show All</span>
      </div>
      <ul>
      <CardMusic
          img={img1}
          titulo="Today’s Top Hits"
          descricao="Harry Styles is on top of the Hottest 50!"
        />
        <CardMusic
          img={img2}
          titulo="RapCaviar"
          descricao="New music from Lil Baby, Gucci Mane and DaBaby."
        />
        <CardMusic
          img={img3}
          titulo="All Out 2010s"
          descricao="The biggest songs of the 2010s."
        />
        <CardMusic
          img={img4}
          titulo="Rock Classics"
          descricao="Rock legends & epic songs that continue to inspire..."
        />
        <CardMusic
          img={img5}
          titulo="Chill Hits"
          descricao="Kick back to the best new and recent chill hits."
        />
      </ul>
    </section>
  )
}

export default Playlist
