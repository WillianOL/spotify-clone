import React from 'react';
import CardMusic from './CardMusic/CardMusic';

const Destaque = ({ titulo }) => {
  return (
    <section className="sectionMusic">
      <div>
        <h1>{titulo}</h1>
        <span>Show All</span>
      </div>
      <ul>
        <CardMusic
          img="../../../public/img-destaque/destaque01.png"
          titulo="Peaceful Piano"
          descricao="Peaceful piano to help you slow down, breathe, and..."
        />
        <CardMusic
          img="../../../public/img-destaque/destaque02.png"
          titulo="Deep Focus"
          descricao="Keep calm and focus with ambient and post-rock music."
        />
        <CardMusic
          img="../../../public/img-destaque/destaque03.png"
          titulo="Instrumental Study"
          descricao="Focus with soft study music in the background."
        />
        <CardMusic
          img="../../../public/img-destaque/destaque04.png"
          titulo="Focus Flow"
          descricao="Uptempo instrumental hiphop beats."
        />
        <CardMusic
          img="../../../public/img-destaque/destaque05.png"
          titulo="Beats to think to"
          descricao="Focus with deep techno and tech house."
        />
      </ul>
    </section>
  );
};

export default Destaque;
