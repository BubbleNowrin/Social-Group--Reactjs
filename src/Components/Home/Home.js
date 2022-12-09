import React from 'react';
import Banner from './Banner/Banner';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import image from '../../Assets/whole.svg';
import image1 from '../../Assets/Group 3 (1).svg';
import './Banner/Banner.css';
import PostHeader from './PostSection/PostSection/PostHeader/PostHeader';
import PostCards from './PostSection/PostSection/Posts/PostCards';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';



const Home = () => {
    return (
        <div>
            <div class=" d-md-none w-full d-flex justify-content-end align-items-center">
                <button class="btn text-secondary text-right" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={image1} className='img-fluid' alt="" />
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <button type="button" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Sign Up
                        </button>
                    </li>
                    <li>
                        <button type="button" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Sign In
                        </button>
                    </li>
                </ul>
            </div>
            <div className='d-md-flex justify-content-evenly d-none' >
                <Navbar expand="lg" >
                    <Container fluid>
                        <div className='me-5 d-none d-sm-none d-md-block'>
                            <Link className="navbar-brand" to="#">
                                <img src={image} alt="Logo" className="d-inline-block align-text-top" />
                            </Link>
                        </div>
                        <Navbar.Toggle aria-controls="navbarScroll" className='d-none d-sm-none' />
                        <Navbar.Collapse id="navbarScroll">
                            <Form className="d-flex mx-5 d-none d-sm-none d-md-block">

                                <i class="fa-solid fa-magnifying-glass"></i>
                                <Form.Control
                                    type="search"
                                    className="py-2 px-5 rounded-pill border border-0 bg-light w-100"
                                    placeholder="Search group"
                                    aria-label="Search"
                                />
                            </Form>
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >


                                <li class="nav-item dropdown ms-5 d-none d-sm-none d-md-block">
                                    <Link class="nav-link dropdown-toggle fw-bold" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Create Account.<span className='text-primary'>It's Free!</span>
                                    </Link>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <button type="button" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                Sign Up
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Sign In
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Banner></Banner>
            <PostHeader></PostHeader>
            <PostCards></PostCards>
            <SignUp></SignUp>
            <SignIn></SignIn>
        </div>
    );
};

export default Home;