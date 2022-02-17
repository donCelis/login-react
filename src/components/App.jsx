import { useContext } from 'react'
import { Allcontext } from '../context'
import { useRoutes } from 'react-router-dom'
import { Paths } from '../routes'

const App = () => {
  const { isLogin } = useContext(Allcontext)

  const routing = useRoutes(Paths(isLogin))
  return (
    <>
      {routing}
    </>
  )
}

export default App
