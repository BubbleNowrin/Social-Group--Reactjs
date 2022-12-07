import React from 'react';
import Banner from './Banner/Banner';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import image from '../../Assets/whole.svg';
import search from '../../Assets/Vector.svg';

const Home = () => {
    return (
        <div>
            <div className='d-flex justify-content-evenly' >
                <Navbar expand="lg" >
                    <Container fluid>
                        <div className='me-5'>
                            <Link className="navbar-brand" to="#">
                                <img src={image} alt="Logo" className="d-inline-block align-text-top" />
                            </Link>
                        </div>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Form className="d-flex position-relative mx-5">
                                <img className="position-absolute" src={search} alt="" />
                                <Form.Control
                                    type="search"
                                    className="me-2 py-2 px-5 w-auto rounded-pill border border-0 bg-light"
                                    placeholder="Search for your favorite groups in ATG"
                                    aria-label="Search"
                                />
                            </Form>
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >


                                <li class="nav-item dropdown ms-5">
                                    <Link class="nav-link dropdown-toggle fw-bold" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Create Account.<span className='text-primary'>It's Free!</span>
                                    </Link>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <Link
                                                class="dropdown-item" to="#">Sign Up
                                            </Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="#">Sign In
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Home;