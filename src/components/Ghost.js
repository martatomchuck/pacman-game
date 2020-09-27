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
        this.changeDirectionInterval = setInterval(this.changeDirection, 20000);
    }

    componentWillUnmount() {
        clearInterval(this.changeDirectionInterval);
    }

    move = () => {
        
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