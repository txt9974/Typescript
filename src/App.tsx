import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App