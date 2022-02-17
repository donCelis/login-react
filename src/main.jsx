import React from 'react'
import { render } from 'react-dom'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// context
import { ContextProvider } from './context'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import Test from './routes/test'

render(
  <React.StrictMode>
    <ContextProvider>
      {/*  <Test /> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
