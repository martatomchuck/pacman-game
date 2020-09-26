import React, { useState } from 'react';

import '../css/pacman.css';
import Header from '../components/Header';
import Board from '../components/Board';

function Pacman() {
  const [score, setScore] = useState(0);

  return (
    <div>
        <Header score={score}/>
        <Board/>
    </div>
  );
}

export default Pacman;
