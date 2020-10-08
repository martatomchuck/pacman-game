import React, { useState } from 'react';

import Header from './Header';
import Board from './Board';

function PacmanGame() {
  const [score, setScore] = useState(0);

  return (
    <>
        <Header score={score}/>
        <Board setScore={setScore}/>
    </>
  );
}

export default PacmanGame;
