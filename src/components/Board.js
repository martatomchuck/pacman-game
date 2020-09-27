import React, { Component } from 'react';

import Pacman from './Pacman';
import Ghost from './Ghost';
import Food from './Food';

class Board extends Component {

    constructor(props) {
        super(props);
        this.amountOfFood = 
    }

    render() {
        return (
            <div className="board">
                <Pacman/>
                <Ghost color="blue"/>
                <Ghost color="pink"/>
                <Food position={{top: 100, left: 100}}/>
                <Food position={{top: 150, left: 100}}/>
            </div>
        )
    }
}

// TO DO move to config
Board.defaultProps = {
    foodSize: 50,
    border: 10 * 2,
    topScoreHeight: 60
};

export default Board;