import Main from './Components/Main/Main'
import { Provider } from 'react-redux'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ConfigureStore } from './Redux/configureStore'
import Navbar from './Components/Navbar'
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './Components/Images/background.png'

const store = ConfigureStore();

function App() {

  var sectionStyle = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  }

  return (
    <Provider store={store}>
      <Navbar />
      <div style={sectionStyle}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
