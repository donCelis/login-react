import React from 'react'
import ReactDOM from 'react-dom'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// context
import { ContextProvider } from './context'
import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
