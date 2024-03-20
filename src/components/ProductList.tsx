import instance from '@/apis'
import { TProduct } from '@/interfaces/TProduct'
import { table } from 'console'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ProductList = () => {
  // ! Dump component va smart component
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    // Cach 1:
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProducts(data)
      })

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
  }, [])

  // ! DependencyList = Danh sách phụ thuộc
  return (
    <div className='products'>
      {products.map((product) => (
        <div key={product.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img className='prods' variant='top' src={product.thumbnail} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button variant='primary'>Product details</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default ProductList
