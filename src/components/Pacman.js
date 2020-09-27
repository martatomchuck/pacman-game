import React, { Component } from 'react';

// importowanie i osadzanie jako komponent
import { ReactComponent as PacmanSvg } from '../assets/pacman.svg';

class Pacman extends Component {
    
    state = {
        direction: '',
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
        // console.log(event.keyCode, event.key);

        const currentTop = this.state.position.top;
        const currentLeft = this.state.position.left;
        const { step, border, size, topScoreHeight } = this.props;

        // 37 ArrowLeft
        // 38 ArrowUp
        // 39 ArrowRight
        // 40 ArrowDown

        switch (event.keyCode) {
            case 37:
                this.setState({
                    position: {
                        top: currentTop,
                        // if the value of left is less than 0, take 0
                        left: Math.max(currentLeft - step, 0)
                    },
                    direction: 'left'
                })
                break;
            case 38:
                this.setState({
                    position: {
                        // if the value of top is less than 0, take 0
                        top: Math.max(currentTop - step, 0),
                        left: currentLeft
                    },
                    direction: 'up'
                })
                break;
            case 39:
                this.setState({
                    position: {
                        top: currentTop,
                        // minimal value of: right step or window width minus border and pacman size)
                        left: Math.min(currentLeft + step, window.innerWidth - border/2 - size)
                    },
                    direction: 'right'
                })
                break;
            case 40:
                this.setState({
                    position: {
                        top: Math.min(currentTop + step, window.innerHeight - border - size - topScoreHeight),
                        left: currentLeft
                    },
                    direction: 'down'
                })
                break;
            default:
                this.setState({
                    direction: 'right'
                })
        }
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
