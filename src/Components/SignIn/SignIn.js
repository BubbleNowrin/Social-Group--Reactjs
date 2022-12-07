import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import image from "../../Assets/Group 3.svg"
import './SignIn.css'

const SignIn = () => {
    return (
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header custom-color">
                            <h1 class="modal-title fs-6 text-success" id="staticBackdropLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex">
                            <div className='w-50'>
                                <h2>Sign In</h2>

                                <div>
                                    <input className='d-block w-100 bg-light p-2 border' type="text" placeholder='Email' />
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light" aria-label="" placeholder='Password' />
                                        <span class="input-group-text"><AiOutlineEye /></span>
                                    </div>

                                </div>
                                <button className='btn btn-primary mt-3 rounded-pill w-100'>Sign In</button>
                                <button className='btn btn-light mt-3 rounded-pill w-100 border'><span class="text-primary"><FaFacebook /></span> <span className='mt-2 ms-1'>Sign up with Facebook</span></button>
                                <button className='btn btn-light mt-3 rounded-pill w-100 border'> <FcGoogle /><span className='mt-2 ms-1'>Sign up with Google</span></button>
                                <h2 className='fs-6 ms-5 text-center mt-3 me-3'>Forgot Password?</h2>
                            </div>
                            <div className='w-50 ms-5'>
                                <h2 className='fs-6'>Don’t have an account yet? <Link to="#">Create new for free! </Link></h2>
                                <img className='img-fluid' src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;