import React from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
<<<<<<< HEAD
import NavBar from './components/NavBar/NavBar';
=======
import 'typeface-libre-baskerville';
import 'typeface-work-sans';
>>>>>>> 7d25309fb0f54d61e13025db8740a247a5707ee0

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
