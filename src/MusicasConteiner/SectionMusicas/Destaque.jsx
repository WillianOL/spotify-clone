import React from 'react';
import CardMusic from './CardMusic/CardMusic';

import img1 from "./imgs/img-destaque/destaque01.png"
import img2 from "./imgs/img-destaque/destaque02.png"
import img3 from "./imgs/img-destaque/destaque03.png"
import img4 from "./imgs/img-destaque/destaque04.png"
import img5 from "./imgs/img-destaque/destaque05.png"

const Destaque = ({ titulo }) => {
  return (
    <section className="sectionMusic">
      <div>
        <h1>{titulo}</h1>
        <span>Show All</span>
      </div>
      <ul>
        <CardMusic
          img={img1}
          titulo="Peaceful Piano"
          descricao="Peaceful piano to help you slow down, breathe, and..."
        />
        <CardMusic
          img={img2}
          titulo="Deep Focus"
          descricao="Keep calm and focus with ambient and post-rock music."
        />
        <CardMusic
          img={img3}
          titulo="Instrumental Study"
          descricao="Focus with soft study music in the background."
        />
        <CardMusic
          img={img4}
          titulo="Focus Flow"
          descricao="Uptempo instrumental hiphop beats."
        />
        <CardMusic
          img={img5}
          titulo="Beats to think to"
          descricao="Focus with deep techno and tech house."
        />
      </ul>
    </section>
  );
};

export default Destaque;
