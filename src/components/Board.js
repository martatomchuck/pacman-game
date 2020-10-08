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

    // checking for pacman position
    componentDidMount() {
        this.intervalFood = setInterval(this.lookForFood, 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalFood);
    }

    // changing food display to hidden
    lookForFood = () => {
        const pacmanX = this.pacmanRef.current.state.position.left;
        const pacmanY = this.pacmanRef.current.state.position.top;
        const pacmanSize = this.pacmanRef.current.props.size;

        const pacmanLastX = pacmanX + pacmanSize / 2;
        const pacmanLastY = pacmanY + pacmanSize / 2;

        for (let i = 0; i <= this.amountOfFood; i++) {
            const currentFood = this['food' + i].current;
            if (currentFood) {
                const currentFoodX = currentFood.state.position.left;
                const currentFoodY = currentFood.state.position.top;
                const currentFoodSize = currentFood.props.foodSize;
                const currentFoodLastX = currentFoodX + currentFoodSize / 2;
                const currentFoodLastY = currentFoodY + currentFoodSize / 2;

                if ( 
                    (pacmanX >= currentFoodX && pacmanX <= currentFoodLastX)
                    || (pacmanLastX >= currentFoodX && pacmanLastX <= currentFoodLastX) ) {
                    if ( (pacmanY >= currentFoodY && pacmanY <= currentFoodLastY) || (pacmanLastY >= currentFoodY && pacmanLastY <= currentFoodLastY) ) {
                        if (!currentFood.state.hidden) {
                            currentFood.ate() // !hidden
                            this.props.setScore((value) => value + 1);
                        }
                    }
                }
            }
        }
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

            if (currentTop + foodSize >= (window.innerHeight - border - topScoreHeight - 30)) {
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
                <Ghost color="purple"/>
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