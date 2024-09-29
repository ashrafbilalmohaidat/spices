import React,{useState, useEffect} from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'
import {NavLink} from "react-router-dom"
const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return(
      <div>
      <Navbar id="header" expand="lg" className={isScrolled ? 'header  scrolled bg-body-tertiary':'header '}>
      <Container>
        <Navbar.Brand href="/">Spices</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
export default Header;