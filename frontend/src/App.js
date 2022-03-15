import Main from './Components/Main/Main'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
  );
}

export default App;
