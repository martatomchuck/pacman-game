import React, { Component } from 'react';

import { ReactComponent as GhostSvg } from '../assets/ghost.svg';

class Ghost extends Component {

    state = {
        direction: 'left',
        position: {
            top: 50 * 3,
            left: 50 * 3
        }
    }

    changeDirection = () => {
        const arrayOfMovement = [ 'left', 'up', 'right', 'down' ];
        const movement = Math.floor(Math.random() * 4);

        this.setState({direction: arrayOfMovement[movement]}, () => {
            console.log('direction: ', this.state.direction)
        });
    }

    componentDidMount() {
        this.changeDirectionInterval = setInterval(this.changeDirection, 2000);
        this.moveInterval = setInterval(this.move, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.changeDirectionInterval);
        clearInterval(this.moveInterval);
    }

    move = () => {
        const currentTop = this.state.position.top;
        const currentLeft = this.state.position.left;
        const { direction } = this.state;
        const { step, border, size, topScoreHeight } = this.props;

        // 37 ArrowLeft
        // 38 ArrowUp
        // 39 ArrowRight
        // 40 ArrowDown

        switch (direction) {
            case 'left':
                this.setState({
                    position: {
                        top: currentTop,
                        // if the value of left is less than 0, take 0
                        left: Math.max(currentLeft - step, 0)
                    }
                })
                break;
            case 'up':
                this.setState({
                    position: {
                        // if the value of top is less than 0, take 0
                        top: Math.max(currentTop - step, 0),
                        left: currentLeft
                    }
                })
                break;
            case 'right':
                this.setState({
                    position: {
                        top: currentTop,
                        // minimal value of: right step or window width minus border and pacman size)
                        left: Math.min(currentLeft + step, window.innerWidth - border - size - 80)
                    }
                })
                break;
            case 'down':
                this.setState({
                    position: {
                        top: Math.min(currentTop + step, window.innerHeight - border - size - topScoreHeight - 60),
                        left: currentLeft
                    }
                })
                break;
            default:
        }
    }

    render() {
        const { color } = this.props;

        return (
            <div style={this.state.position} className="ghost">
                <GhostSvg className={`ghost-${color}`}/>
            </div>
        )
    }
}

Ghost.defaultProps = {
    color: 'black',
    step: 50, // ghost single step: 50px
    size: 50, // ghost size: 50x50
    // TO DO: move to config
    border: 10 * 2,
    topScoreHeight: 60
};

export default Ghost;