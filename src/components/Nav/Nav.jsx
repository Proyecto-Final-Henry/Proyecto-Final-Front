import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../img/logo.png"

export default function NavigationB() {
  return (
    <nav>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='Nav'>
            <Container>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <div className="logo">
                        <Nav.Link>
                            <img src={Logo} alt="logo"/>
                        </Nav.Link>
                    </div>
                    <Nav.Link href="/"><h5>HOME</h5></Nav.Link>
                    <Nav.Link href="/premium"><h5>PREMIUM</h5></Nav.Link>
                    <Nav.Link href="/contact"><h5>CONTACT</h5></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/login"><h5>SING IN</h5></Nav.Link>
                    <Nav.Link href="/register"><h5>SING UP</h5></Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </nav>
  );
}
