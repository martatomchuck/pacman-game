import React, { Component } from 'react';

// importowanie i osadzanie jako komponent
import { ReactComponent as PacmanSvg } from '../assets/pacman.svg';

class Pacman extends Component {
    
    state = {
        direction: 'right',
        position: {
            top: 0,
            left: 0
        }
    }

    render() {
        return (
            <div
                className="pacman"
                style={this.state.position}
            >
                <PacmanSvg/>
            </div>
        )
    }
}

Pacman.defaultProps = {
    step: 50, // pacman steps: 50px
    size: 50, // pacman size: 50x50
    // TO DO: move to config
    border: 10 * 2,
    topScoreHeight: 60
};

export default Pacman;
