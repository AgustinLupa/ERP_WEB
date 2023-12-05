import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={*Component*} >
      <Route path="/" element={<*componente*>} 
      </Route>
    </Routes>
  </BrowserRouter> */}
    <App />
  </>,
)
