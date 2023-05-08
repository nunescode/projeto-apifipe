import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Tabela Fipe</Navbar.Brand>
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="/carros">Página Inicial</Nav.Link>
                        <Nav.Link href="/carros">Carros</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Buscar"/>
                        <Button variant="primary">Buscar</Button>
                    </Form>
            </Container>
        </Navbar>
    </>
  )
}

export default Header