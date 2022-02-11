import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Blog } from '../pages/Blog'
import Login from '../pages/Login'

export const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Login />} />
        <Route path='blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}
