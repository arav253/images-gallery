import React from 'react'; 
import { Navbar, Container } from 'react-bootstrap'

const navbarStlyle = {
    backgroundColor: 'lightblue'
}

const Header = (props) => {
    return (
        <Navbar style={navbarStlyle} data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/">{props.title}</Navbar.Brand>
            </Container>
        </Navbar>
           )
};

export default Header;
