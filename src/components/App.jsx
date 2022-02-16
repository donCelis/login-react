import { Paths } from '../routes'
import { useRoutes } from 'react-router-dom'
import { useContext } from 'react'
import { Allcontext } from '../context'

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
