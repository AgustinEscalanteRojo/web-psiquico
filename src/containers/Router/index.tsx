import { FC } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../../views/Home'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/*" element={<Navigate replace to="/Home" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router