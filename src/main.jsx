import React from 'react'
import { render } from 'react-dom'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// context
import { ContextProvider } from './context'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'

render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
