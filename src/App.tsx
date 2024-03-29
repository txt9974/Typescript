import './App.css'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import { useEffect, useState } from 'react'
import { TProduct } from './interfaces/TProduct'
import instance from './apis'
import DashBoard from './pages/admin/Dashboard'
import Add from './pages/admin/Add'
// import { log } from 'console'
function App() {
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await instance.get('/products')
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])
  const handleAdd = (product: TProduct) => {
    console.log(product)
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<Home products={products} />} />
          <Route path='/shop/:id' element={<ProductDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='/admin'>
          <Route index element={<DashBoard products={products} />} />
          <Route path='/admin/add' element={<Add onAdd={handleAdd} />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
