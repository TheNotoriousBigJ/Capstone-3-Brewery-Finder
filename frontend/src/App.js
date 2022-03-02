import Main from './Components/Main/Main'
import {Provider} from 'react-redux'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'
import Navbar from './Components/Navbar'
import { Nav } from 'react-bootstrap'

const store = ConfigureStore();

function App() {
 

 return (
    <Provider store={store}>

      <Navbar></Navbar>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
