// import instance from '@/apis'
// import { TProduct } from '@/interfaces/TProduct'
// import { table } from 'console'
// import { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// import { Link } from 'react-router-dom'

// const ProductList = () => {
// ! Dump component va smart component
//   const [products, setProducts] = useState<TProduct[]>([])
//   useEffect(() => {
// Cach 1:
//     fetch('http://localhost:3000/products')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data)
//         setProducts(data)
//       })

// Cach 2:
// const getProducts = async () => {
//   try {
//     const { data } = await instance.get('/products')
//     console.log(data)
//     setProducts(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// getProducts()
//   }, [])

// ! DependencyList = Danh sách phụ thuộc
//   return (
//     <div className='products'>
//       {products.map((product) => (
//         <div key={product.id}>
//           <Card style={{ width: '18rem' }} className='prod'>
//             <Card.Img className='prods' variant='top' src={product.thumbnail} />
//             <Card.Body>
//               <Card.Title>{product.title}</Card.Title>
//               <Card.Text>Còn lại: {product?.stock}</Card.Text>
//               <Link to={`/shop/${product.id}`}>
//                 <Button variant='primary'>Product details</Button>
//                 <Button className='btn' variant='primary'>
//                   Buy Now
//                 </Button>
//               </Link>
//             </Card.Body>
//           </Card>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ProductList
