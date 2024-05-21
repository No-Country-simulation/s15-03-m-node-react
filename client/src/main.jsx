import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
