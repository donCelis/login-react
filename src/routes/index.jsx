import { Navigate } from 'react-router-dom'
import { SinglePost } from '../components/SinglePost'
import { Blog } from '../pages/Blog'
import { Login } from '../pages/Login'

const Paths = (isLoggedIn) => [
  {
    path: '/blog',
    element: isLoggedIn ? <Blog /> : <Navigate to='/' />,
    children: [
      {
        path: 'post:title',
        element: <SinglePost />
      }
    ]
  },
  {
    path: '/',
    element: !isLoggedIn ? <Login /> : <Navigate to='/blog' />
  }
]

export { Paths }
