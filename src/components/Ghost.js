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