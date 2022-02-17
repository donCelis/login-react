import React from 'react'
import { render } from 'react-dom'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// context
import { ContextProvider } from './context'
import Test from './routes/test'

render(
  <React.StrictMode>
    <ContextProvider>
      <Test />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
