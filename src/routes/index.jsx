import { Navigate } from 'react-router-dom'
import { Blog } from '../pages/Blog'
import { Login } from '../pages/Login'

const Paths = (isLoggedIn) => [
  {
    path: '/blog',
    element: isLoggedIn ? <Blog /> : <Navigate to='/' />
  },
  {
    path: '/',
    element: !isLoggedIn ? <Login /> : <Navigate to='/blog' />
  }
]

export { Paths }
