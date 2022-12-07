import React from 'react';
import card from "../../../../../Assets/Rectangle 5.jpg";
import card1 from "../../../../../Assets/Rectangle 5 (1).jpg";
import card2 from "../../../../../Assets/Rectangle 5 (2).jpg";
import writer from "../../../../../Assets/Rectangle 3 (1).jpg";
import writer1 from "../../../../../Assets/Rectangle 3 (2).jpg";
import writer2 from "../../../../../Assets/Rectangle 3 (2).png";
import writer3 from "../../../../../Assets/Rectangle 3.png";
import { BsThreeDots, BsBriefcase } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineExclamationCircle } from 'react-icons/ai';
import { HiShare } from 'react-icons/hi';
import { RiCalendarEventFill } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';
import { FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PostCards = () => {
    return (
        <div className='container mt-4 d-flex'>
            <div className='me-5'>
                <div class="card mb-3">
                    <img src={card} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title fs-5">✍️<span>Article</span></h4>
                        <div className='d-flex justify-content-between'>
                            <h5 class="card-title fs-3">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                            <div class="dropdown">
                                <button class="btn btn-light text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots className='text-dark' />
                                </button>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="#">Edit</Link></li>
                                    <li><Link class="dropdown-item" to="#">Report</Link></li>
                                    <li><Link class="dropdown-item" to="#">Option 3</Link></li>
                                </ul>
                            </div>
                        </div>
                        <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center '>
                                <img src={writer} alt="" />
                                <h2 className='fs-5 ms-2 mt-1'>Sarthak Kamra</h2>
                            </div>
                            <div class="d-flex align-items-center">
                                <div className='d-flex align-items-center'>
                                    <AiOutlineEye />
                                    <h2 className='fs-6 ms-2 mt-1 me-5'>1.4k views</h2>
                                </div>
                                <button className='border border-0 px-2 py-1 btn-light'><HiShare /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <img src={card1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title fs-5">🔬️<span>Education</span></h4>
                        <div className='d-flex justify-content-between'>
                            <h5 class="card-title fs-3">Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
                            <div class="dropdown">
                                <button class="btn btn-light text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots className='text-dark' />
                                </button>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="#">Edit</Link></li>
                                    <li><Link class="dropdown-item" to="#">Report</Link></li>
                                    <li><Link class="dropdown-item" to="#">Option 3</Link></li>
                                </ul>
                            </div>
                        </div>
                        <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center '>
                                <img src={writer1} alt="" />
                                <h2 className='fs-5 ms-2 mt-1'>Sarah West</h2>
                            </div>
                            <div class="d-flex align-items-center">
                                <div className='d-flex align-items-center'>
                                    <AiOutlineEye />
                                    <h2 className='fs-6 ms-2 mt-1 me-5'>1.4k views</h2>
                                </div>
                                <button className='border border-0 px-2 py-1 btn-light'><HiShare /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <img src={card1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title fs-5">🗓️<span>Meetup</span></h4>
                        <div className='d-flex justify-content-between'>
                            <h5 class="card-title fs-3">Finance & Investment Elite Social Mixer @Lujiazui</h5>
                            <div class="dropdown">
                                <button class="btn btn-light text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots className='text-dark' />
                                </button>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="#">Edit</Link></li>
                                    <li><Link class="dropdown-item" to="#">Report</Link></li>
                                    <li><Link class="dropdown-item" to="#">Option 3</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center'>
                                <RiCalendarEventFill />
                                <h2 className='fs-6 ms-2 mt-1'>Fri, 12 Oct, 2018</h2>
                            </div>
                            <div className='d-flex align-items-center ms-5'>
                                <GoLocation />
                                <h2 className='fs-6 ms-2 mt-1'>Ahmedabad, India</h2>
                            </div>
                        </div>
                        <button type="button" class="btn border-secondary w-100 mt-1 mb-4"><span className='text-danger fw-bold'>Visit Website</span></button>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center '>
                                <img src={writer2} alt="" />
                                <h2 className='fs-5 ms-2 mt-1'>Ronal Jones</h2>
                            </div>
                            <div class="d-flex align-items-center">
                                <div className='d-flex align-items-center'>
                                    <AiOutlineEye />
                                    <h2 className='fs-6 ms-2 mt-1 me-5'>1.4k views</h2>
                                </div>
                                <button className='border border-0 px-2 py-1 btn-light'><HiShare /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title fs-5">💼️<span>Job</span></h4>
                        <div className='d-flex justify-content-between'>
                            <h5 class="card-title fs-3">Software Developer</h5>
                            <div class="dropdown">
                                <button class="btn btn-light text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots className='text-dark' />
                                </button>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="#">Edit</Link></li>
                                    <li><Link class="dropdown-item" to="#">Report</Link></li>
                                    <li><Link class="dropdown-item" to="#">Option 3</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center'>
                                <BsBriefcase />
                                <h2 className='fs-6 ms-2 mt-1'>Innovaccer Analytics Private Ltd.</h2>
                            </div>
                            <div className='d-flex align-items-center ms-5'>
                                <GoLocation />
                                <h2 className='fs-6 ms-2 mt-1'>Noida, India</h2>
                            </div>
                        </div>
                        <button type="button" class="btn border-secondary w-100 mt-1 mb-4"><span className='fw-bold text-success'>Apply on Timesjobs</span></button>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center '>
                                <img src={writer3} alt="" />
                                <h2 className='fs-5 ms-2 mt-1'>Joseph Gray</h2>
                            </div>
                            <div class="d-flex align-items-center">
                                <div className='d-flex align-items-center'>
                                    <AiOutlineEye />
                                    <h2 className='fs-6 ms-2 mt-1 me-5'>1.4k views</h2>
                                </div>
                                <button className='border border-0 px-2 py-1 btn-light'><HiShare /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ms-5 mt-5'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <GoLocation />
                        <h2 className='fs-6 ms-2 mt-1'>Noida, India</h2>
                    </div>
                    <div>
                        <FaPen />
                    </div>
                </div>
                <hr />
                <div className='d-flex align-items-center'>
                    <AiOutlineExclamationCircle />
                    <h2 className='fs-6  ms-2 text-secondary mt-3'>Your location will help us serve better and extend a personalised experience.</h2>
                </div>
            </div>
        </div>
    );
};

export default PostCards;