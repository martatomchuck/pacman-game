import React, { Component } from 'react';

import Pacman from './Pacman';
import Ghost from './Ghost';
import Food from './Food';

class Board extends Component {

    constructor(props) {
        super(props);

        this.pacmanRef = React.createRef();

        this.foods = [];

        // calculating number of dots (minus one where the pacman is placed)
        this.amountOfFood = (
            (window.innerWidth - this.props.foodSize - 80) * (window.innerHeight - this.props.topScoreHeight)
        ) / (this.props.foodSize * this.props.foodSize) - 1;

        console.log(this.amountOfFood);

        // creating ref for every food dot
        for (let i = 0; i < this.amountOfFood; i++) {
            this['food' + i] = React.createRef();
        }
    }

    // changing food display to hidden
    lookForFood = () => {

    }

    render() {

        const { foodSize, border, topScoreHeight } = this.props;

        let foods = [];
        let currentTop = 0;
        let currentLeft = 1 * foodSize;

        // Generating food on the board
        for (let i = 0; i < this.amountOfFood; i++) {

            if(currentLeft + foodSize >= window.innerWidth - border - 80) {
                currentTop += this.props.foodSize;
                currentLeft = 0;
            }

            if (currentTop + foodSize >= (window.innerHeight - border - topScoreHeight - 60)) {
                break;
            }

            const position = { left: currentLeft, top: currentTop};

            currentLeft += foodSize;

            foods.push(
                <Food
                    key={`food-elem-${i}`}
                    position={position}
                    ref={this['food' + i]}
                />
            )
        }

        return (
            <div className="board">
                {foods}
                <Pacman ref={this.pacmanRef}/>
                <Ghost color="blue"/>
                <Ghost color="pink"/>
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