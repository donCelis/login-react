import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// components
import { Blog } from './pages/Blog'
import Login from './pages/Login'

const App = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <>
      {!isLogin ? <Login setState={setIsLogin} /> : <Blog />}
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
