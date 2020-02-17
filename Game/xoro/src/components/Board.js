import React from 'react';
import Block from './Block';
import WinnerIdentifier from '../helpers/WinnerIdentifier';

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blocks: Array(9).fill(null),
            isXNext: true,
        };
    }

    handleClick(i) {
        const blocks = this.state.blocks.slice();
        if (WinnerIdentifier(blocks) || blocks[i]) {
            return;
        }
        blocks[i] = this.state.isXNext ? 'X' : 'O';
        this.setState({
            blocks: blocks,
            isXNext: !this.state.isXNext,
        });
    }

    renderBlock(i) {
        return (
            <Block
                value={this.state.blocks[i]}
                onClick={() => this.handleClick(i)} />
        );
    }

    render() {

        const winner = WinnerIdentifier(this.state.blocks);
        let status;
        if (winner) {
            status = 'Congrats !!! The winner is player  ' + winner;
        } else {
            status = 'Player: ' + (this.state.isXNext ? 'X' : 'O');
        }

        return (
            <div className='board'>
                <div>{status}</div>
                <br />
                <div className='blocks'>
                    <div className='block_row'>
                        {this.renderBlock(0)}
                        {this.renderBlock(1)}
                        {this.renderBlock(2)}
                    </div>
                    <div className='block_row'>
                        {this.renderBlock(3)}
                        {this.renderBlock(4)}
                        {this.renderBlock(5)}
                    </div>
                    <div  className='block_row'>
                        {this.renderBlock(6)}
                        {this.renderBlock(7)}
                        {this.renderBlock(8)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;