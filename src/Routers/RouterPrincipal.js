import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Inicio } from "../Componentes/Inicio";
import { NuevoElemento } from "../Componentes/NuevoElemento";
import { Navbar, Container, Nav, footer } from "react-bootstrap";

export const RouterPrincipal = () =>{
    return (
        <BrowserRouter>
            {/* Encabezado */}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Mi Aplicación</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/" exact>
                                Inicio
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/NuevoElemento">
                                Nuevo Elemento
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Contenido principal */}
            <Container className="mt-4">
                <h1 className="text-center mb-4">Cabeceras</h1>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/NuevoElemento" element={<NuevoElemento />} />
                </Routes>
            </Container>

            {/* Pie de página */}
            <footer className="bg-dark text-white text-center py-3 mt-5">
                <p className="mb-0">Erick Ruiz - INTECAP - © 2024</p>
            </footer>
        </BrowserRouter>
    );
}