import React from 'react';
import Router from 'next/router';


class GameOverPage extends React.Component {

    OnStartClick = () => {
        Router.push('/index');
    }

    render() {
        return (
            <div style={gameOverPageStyle}>
                <h1 style={gameOverStyle}>Game Over</h1>
                <button style={buttonStyle} onClick={this.OnStartClick}><strong>Play new game</strong></button>
            </div>
        )
    }
}


export default GameOverPage;



const gameOverPageStyle = {
    display: 'flex',
    justifyContent: 'space-around' ,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    position: 'fixed',
    color: '#DDEFE3',
    backgroundColor: '#2A484E',
    alignItems: 'center'
}

const gameOverStyle = {
    marginTop: '90px',
    padding: '0px',
    fontFamily: 'cursive',
    fontSize: '100px'
}

const buttonStyle = {
    height: '30px',
    width: '300px',
    padding: '0px',
    margin: '0px',
    backgroundColor: '#DDEFE3',
    borderColor: '#DDEFE3',
    color: '#2A484E',
    borderRadius: '25px',
    fontFamily: 'cursive',
    outline: 'none'
}