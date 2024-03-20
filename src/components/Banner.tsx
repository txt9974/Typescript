import Carousel from 'react-bootstrap/Carousel'
const Banner = () => {
  return (
    <Carousel data-bs-theme='dark'>
      <Carousel.Item>
        <img className='d-block w-100' src='https://i.ibb.co/FHrSCNP/psd-810-sale-tet.jpg' alt='First slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src='https://i.ibb.co/FHrSCNP/psd-810-sale-tet.jpg' alt='Second slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src='https://i.ibb.co/FHrSCNP/psd-810-sale-tet.jpg' alt='Third slide' />
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner
