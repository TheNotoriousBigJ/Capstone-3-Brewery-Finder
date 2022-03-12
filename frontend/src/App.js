import Main from './Components/Main/Main'
import { Provider } from 'react-redux'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ConfigureStore } from './Redux/configureStore'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import Background from './Components/Images/background.png'
import Footer from './Components/Footer'
=======
import Background from './Components/Images/background.jpeg'
>>>>>>> 2a140d073b4dc668acfad1678c300cc94bf334b6

const store = ConfigureStore();

function App() {

  var sectionStyle = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
  }

  return (
    <Provider store={store}>
      <Navbar />
      <div style={sectionStyle}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
      <Footer />

      
    </Provider>
  );
}

export default App;
