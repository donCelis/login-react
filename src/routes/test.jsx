import { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Allcontext } from '../context'
import { Blog } from '../pages/Blog'
import { Login } from '../pages/Login'

const Test = () => {
  const { isLogin } = useContext(Allcontext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={!isLogin ? <Login /> : <Navigate to='/blog' />} />
        <Route path='/blog' element={isLogin ? <Blog /> : <Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Test
