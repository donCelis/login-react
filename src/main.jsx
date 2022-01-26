import React from 'react'
import ReactDOM from 'react-dom'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// components
import { Blog } from './pages/Blog'

ReactDOM.render(
  <React.StrictMode>
    <Blog />
  </React.StrictMode>,
  document.getElementById('root')
)
