import './App.css'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import { useEffect, useState } from 'react'
import { TProduct } from './interfaces/TProduct'
import instance from './apis'
import DashBoard from './pages/admin/Dashboard'
import Add from './pages/admin/Add'
import Edit from './pages/admin/Edit'
import { createProducts, removeProduct, updateProducts } from './apis/product'
// import { TUsers } from './interfaces/TUser'
// import { log } from 'console'
function App() {
  const [products, setProducts] = useState<TProduct[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await instance.get('/products')
        // console.log(data)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])
  const handleAdd = (product: TProduct) => {
    ;(async () => {
      const data = await createProducts(product)
      // setProducts((prev) => [...prev, data])
      setProducts([...products, data])
      navigate('/admin')
    })()
  }
  const handleEdit = (product: TProduct) => {
    ;(async () => {
      const { data } = await instance.put(`/product/${product.id}`, product)
      // const data = await updateProducts(product)
      // setProducts((prev) => [...prev, data])
      setProducts(products.map((i) => (i.id === data.id ? data : i)))
      navigate('/admin')
    })()
  }

  const handleDeleteProduct = (id: number | undefined) => {
    ;(async () => {
      const isConfirm = window.confirm('Are you sure?')
      if (isConfirm) {
        await removeProduct(`${id}`)
        setProducts(products.filter((i) => i.id !== id))
      }
    })()
  }
  // const [users, setUsers] = useState<TUsers[]>([])
  // const handleRegister = (users: TUsers) => {
  //   ;(async () => {
  //     const data = await createUsers(users)
  // setProducts((prev) => [...prev, data])
  //     setUsers([...users, data])
  //     navigate('/login')
  //   })()
  // }
  return (
    <>
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<Home products={products} />} />
          <Route path='/shop/:id' element={<ProductDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* onRegister={handleRegister} */}
        </Route>
        <Route path='/admin'>
          <Route index element={<DashBoard products={products} onDel={handleDeleteProduct} />} />
          <Route path='/admin/add' element={<Add onAdd={handleAdd} />} />
          <Route path='/admin/edit/:id' element={<Edit onEdit={handleEdit} />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
