import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand='lg' className='nav-body' sticky='top'>
      <Container>
        <Navbar.Brand href='#home'>
          <h1>Beth Pauley</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#experience'>Experience</Nav.Link>
            <Nav.Link href='#projects'>Project</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;