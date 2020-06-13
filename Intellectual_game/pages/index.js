import Router from 'next/router'

class Home extends React.Component {

  OnStartClick = () => {
    Router.push('/board');
  }

  render() {
    return (
      <div style={pageStyle}>
        <p style={welcomeStyle}><strong>WELCOME</strong></p>
        <p style={introStyle}>Let's check your knowledge !</p>
        <button style={startButtonStyle} onClick={this.OnStartClick}><strong>Play</strong></button>
      </div>
    )
  }
}
 
export default Home;


const pageStyle = {
  backgroundColor: '#DDEFE3',
  textAlign: 'center',
  color: '#2A484E',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  justifyContent: 'space-around' ,
  flexDirection: 'column'
}

const welcomeStyle = {
  fontWeight: 'bold',
  letterSpacing: '3px',
  marginTop: '20px',
  fontSize: '80px',
  fontFamily: 'cursive'
}

const introStyle = {
  fontSize: '30px',
  marginTop: '50px',
  fontFamily: 'cursive'
}

const startButtonStyle = {
  backgroundColor: '#377375',
  width: '400px',
  height: '50px',
  borderRadius: '20px',
  borderColor: '#377375',
  fontSize: '20px',
  marginBottom: '50px',
  color: '#2A484E',
  fontFamily: 'cursive',
  outline: 'none'
}