import React from 'react';
import BrainPhoto from '../photos/brain_photo.jpg';
import Router from 'next/router';

class WinnerPage extends React.Component{

    OnStartClick = () => {
        Router.push('/index');
    }

    render(){
        return(
            <div style={winnerPageStyle}>
                <h1 style={congratsStyle}>Congrats! You won!</h1>
                <img style={imageStyle} src={BrainPhoto}></img>
                <button style={startButtonStyle} onClick={this.OnStartClick}><strong>Play new game</strong></button>
            </div>
        )
    }
}

export default WinnerPage;



const winnerPageStyle = {
    display: 'flex',
    justifyContent: 'space-around' ,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    position: 'fixed',
    color: '#DDEFE3',
    backgroundColor: 'black',
    alignItems: 'center'
}

const congratsStyle = {
    marginTop: '50px',
    fontFamily: 'cursive',
    color: '#9cf4fb'
}

const imageStyle = {
    height: '340px',
    width: '650px',
    marginTop: '80px',
    padding: '0px'
}

const startButtonStyle = {
    height: '30px',
    width: '300px',
    padding: '0px',
    margin: '0px',
    backgroundColor: '#9cf4fb',
    borderColor: '#9cf4fb',
    color: 'black',
    borderRadius: '25px',
    fontFamily: 'cursive',
    outline: 'none'
}