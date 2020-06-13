import React from 'react';
import QuestionsData from '../database-store/questions-database-store.json';
import Router from 'next/router';
import CoinIcon from '../photos/coin.png';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Score: 0
    }
  }

  OpenQuestionPage = Id => {
    Router.push({
      pathname: '/levels',
      query: { Id: Id },
    })
  }

  componentWillUnmount = () => {
      window.onpopstate = function () {
        Router.push('/index');
  }
 }

  renderBlocks() {
    return QuestionsData.map((Data) => {
      return (
        <div key={"btn_div_" + Data.Id} style={boardStyle}>
            <button key={"btn_" + Data.Id} style={buttonStyle} onClick={this.OpenQuestionPage.bind(this, Data.Id)}>{Data.Id}</button>
        </div>
      )
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <div style={pageStyle}>
          <p style={headerStyle}><strong>QUESTIONS</strong></p>

          <div style={coinStyle}>
            <img src={CoinIcon} style={imageStyle}></img>
            <p style={scoreStyle}><strong>{this.state.Score}</strong></p>
          </div>

          <div style={boardSectionStyle}>
            {this.renderBlocks()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Board;



const pageStyle = {
  backgroundColor: '#DDEFE3',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  position: 'fixed',
  margin: '0px',
  padding: '0px',
  textAlign: 'center'
}

const headerStyle = {
  color: '#2A484E',
  margin: '20px',
  fontSize: '40px',
  marginTop: '30px',
  letterSpacing: '4px',
  fontFamily: 'cursive',
  fontWeight: 'bold'
}

const coinStyle = {
  float: 'right',
  height: '50px',
  width: '150px',
  backgroundColor: '#377375',
  alignItems: 'center',
  borderRadius: '25px',
  marginRight: '20px'
}

const imageStyle = {
  height: '30px',
  width: '40px',
  float: 'right',
  margin: '10px'
}

const scoreStyle = {
  margin: '7px',
  fontSize: '25px',
  float: 'right',
  fontFamily: 'cursive'
}

const boardSectionStyle = {
  marginTop: '180px',
  marginRight: '30px'
}

const boardStyle = {
  display: 'inline-grid',
  margin: '0px',
  padding: '10px',
}

const buttonStyle = {
  backgroundColor: '#377375',
  borderColor: '#377375',
  borderRadius: '25px',
  boxShadow: 'none',
  color: '#3d3838',
  height: '40px',
  width: '110px',
  fontSize: '20px',
  fontFamily: 'cursive',
  outline: 'none',
  margin: '10px'
}