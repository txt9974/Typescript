import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Header() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary' bg='dark' data-bs-theme='dark'>
      <Container fluid>
        <Navbar.Brand href='/'>Thang</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='#action2'>Link</Nav.Link>
            <NavDropdown title='Link' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action4'>Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#' disabled>
              Link
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='/login'>Login |</Nav.Link>
            <Nav.Link href='/register'>| Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
