import React, { Component } from 'react';

import Pacman from './Pacman';

class Board extends Component {
    render() {
        return (
            <div className="board">
                <Pacman/>
                {/* <Ghost/> */}
                {/* <Ghost/> */}
                {/* <Food/> */}
            </div>
        )
    }
}

Board.defaultProps = {
    
};

export default Board;