import { useContext } from 'react'
import { Allcontext } from '../context'

// components
import { Blog } from '../pages/Blog'
import Login from '../pages/Login'

const App = () => {
  const { isLogin } = useContext(Allcontext)

  return (
    <>
      {!isLogin ? <Login /> : <Blog />}
    </>
  )
}

export default App
