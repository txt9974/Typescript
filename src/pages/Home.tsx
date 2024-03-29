import Banner from '@/components/Banner'
// import ProductList from '@/components/ProductList'
import { TProduct } from '@/interfaces/TProduct'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

type Props = {
  products: TProduct[]
}
const Home = ({ products }: Props) => {
  return (
    <div>
      {/* <Header /> */}
      <Banner />
      <h2 className='text'>Danh sách sản phẩm</h2>
      <div className='products'>
        {products.map((product) => (
          <div key={product.id}>
            <Card style={{ width: '18rem' }} className='prod'>
              <Card.Img className='prods' variant='top' src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Còn lại: {product?.stock}</Card.Text>
                <Link to={`/shop/${product.id}`}>
                  <Button variant='primary'>Product details</Button>
                  <Button className='btn' variant='primary'>
                    Buy Now
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
