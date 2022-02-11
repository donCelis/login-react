import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Allcontext } from '../context'
import { Paths } from '../routes'

const App = () => {
  // const { isLogin } = useContext(Allcontext)
  // const navigate = useNavigate()

  return (
    <>
      <Paths />
    </>
  )
}

export default App
