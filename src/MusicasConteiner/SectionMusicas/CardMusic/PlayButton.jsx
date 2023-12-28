import React from 'react';
import { IoPlay } from 'react-icons/io5';
import './PlayButton.scss';

const PlayButton = () => {
  return (
    <button className="botao_play">
      <IoPlay />
    </button>
  );
};

export default PlayButton;
