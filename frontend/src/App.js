import Main from './Components/Main/Main'
import { Provider } from 'react-redux'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ConfigureStore } from './Redux/configureStore'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './Components/Images/background.jpeg'

const store = ConfigureStore();

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>

        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
