import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Allcontext } from '../context'

const PrivateRoute = () => {
  const { isLogin } = useContext(Allcontext)
  return isLogin ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRoute
