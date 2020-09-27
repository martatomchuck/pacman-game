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

    constructor(props) {
        super(props);
        this.pacmanRef = React.createRef();
    }

    componentDidMount() {
        // current = reference to current DOM tree
        this.pacmanRef.current.focus();
    }

    handleKeyDown = (event) => {
        console.log(event.keyCode, event.key);
    }

    render() {

        const { direction, position } = this.state;

        return (
            <div
                // Asigning ref to element
                ref={this.pacmanRef}
                className={`pacman pacman-${direction}`}
                tabIndex="0"
                onKeyDown={this.handleKeyDown}
                style={position}
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
