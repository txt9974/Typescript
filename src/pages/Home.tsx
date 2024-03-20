import Banner from '@/components/Banner'
import ProductList from '@/components/ProductList'

type Props = {}
const Home = (props: Props) => {
  return (
    <div>
      {/* <Header /> */}
      <Banner />
      <h2 className='text'>Danh sách sản phẩm</h2>
      <ProductList />
    </div>
  )
}

export default Home
