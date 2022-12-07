import React from 'react';
import './SignUp.css';
import image from "../../Assets/Group 3.svg"
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header custom-bg">
                            <h1 class="modal-title fs-6 text-success" id="staticBackdropLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex">
                            <div className='w-50'>
                                <h2>Create Account</h2>
                                <div>
                                    <input className='bg-light p-2 border' type="text" placeholder='First Name' />
                                    <input className='bg-light p-2 border' type="text" placeholder='Last Name' />
                                </div>
                                <div>
                                    <input className='d-block w-100 bg-light p-2 border' type="text" placeholder='Email' />
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light" aria-label="" placeholder='Password' />
                                        <span class="input-group-text"><AiOutlineEye /></span>
                                    </div>
                                    <input className='w-100 bg-light p-2 border' type="text" placeholder='Confirm Password' />
                                </div>
                                <button className='btn btn-primary mt-3 rounded-pill w-100'>Create Account</button>
                                <button className='btn btn-light mt-3 rounded-pill w-100 border'><span class="text-primary"><FaFacebook /></span> <span className='mt-2 ms-1'>Sign up with Facebook</span></button>
                                <button className='btn btn-light mt-3 rounded-pill w-100 border'> <FcGoogle /><span className='mt-2 ms-1'>Sign up with Google</span></button>
                            </div>
                            <div className='w-50 ms-5'>
                                <h2 className='fs-6 ms-5'>Already have an account? <Link to="#">Sign In</Link></h2>
                                <img className='img-fluid' src={image} alt="" />
                                <h2 className='fs-6 text-secondary fw-normal'>By signing up, you agree to our Terms & conditions, Privacy policy</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;