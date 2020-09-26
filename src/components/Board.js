import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Board extends Component {
    render() {
        return (
            <div>Hello World!</div>
        )
    }
}

Board.defaultProps = {
    
};

export default Board;