import React from 'react';
import Board from './Board';

class Game extends React.Component {

    render() {
        return (
            <div className='X_or_O'>
                <Board />
            </div>
        );
    }
}

export default Game;