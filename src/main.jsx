import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import HouseContextProvider from './context/HouseContext.jsx'
import { HashRouter } from 'react-router-dom'
import ThemeContextProvider from './context/ThemeContext.jsx'
// import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HouseContextProvider>
    <ThemeContextProvider>
      <HashRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HashRouter>
    </ThemeContextProvider>
  </HouseContextProvider>
)
