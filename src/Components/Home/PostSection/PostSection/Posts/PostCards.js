import React from 'react';
import card from "../../../../../Assets/Rectangle 5.jpg";
import card1 from "../../../../../Assets/Rectangle 5 (1).jpg";
import card2 from "../../../../../Assets/Rectangle 5 (2).jpg";
import writer from "../../../../../Assets/Rectangle 3 (1).jpg";
import writer1 from "../../../../../Assets/Rectangle 3 (2).jpg";
import writer2 from "../../../../../Assets/Rectangle 3 (2).png";
import writer3 from "../../../../../Assets/Rectangle 3.png";
import group from "../../../../../Assets/Rectangle 6.png";
import group1 from "../../../../../Assets/Rectangle 6 (1).png";
import group2 from "../../../../../Assets/Rectangle 6 (2).png";
import group3 from "../../../../../Assets/Rectangle 6 (3).png";
import { BsThreeDots, BsBriefcase } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineExclamationCircle } from 'react-icons/ai';
import { HiShare } from 'react-icons/hi';
import { RiCalendarEventFill } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';
import { FaPen } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import "../../../Banner/Banner.css";
import circle from "../../../../../Assets/Group 6.png"

const PostCards = () => {
    return (
        <div className='container-md mt-4 d-md-flex'>
            <img className='circle img-fluid d-md-none' src={circle} alt="" />
            <div className='me-5 w-100'>
                <div className="card mb-3">
                    <img src={card} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title caption-font">✍️<span>Article</span></h4>
                        <div className='d-flex justify-content-between'>
                            <h5 className="card-title title-font">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                            <div className="dropdown">
                                <button className="btn btn-light text-dark " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots className='text-dark' />
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Edit</Link></li>
                                    <li><Link className="dropdown-item" to="#">Report</Link></li>
                                    <li><Link className="dropdown-item" to="#">Option 3</Link></li>
                                </ul>
                            </div>
                        </div>
                        <p className="card-text p-font">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center '>
                                <img src={writer} alt="" />
                                <h2 className='writer-font ms-2 mt-1 d-none d-sm-none d-md-block justify-content-center align-items-center'>Sarthak Kamra</h2>
                                <div className='d-flex flex-column align-items-center d-lg-none '>
                                    <h2 className='writer-font mt-1 ms-2'>Sarthak Kamra</h2>
                                    <h2 className='fs-6 mt-2'>1.4k views</h2>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className='d-flex align-items-center d-none d-sm-none d-md-flex'>
                                    <AiOutlineEye />
                                    <h2 className='fs-6 ms-2 mt-1 me-5'>1.4k views</h2>
                                </div>
                                <button className='border border-0  btn-light btn'>
                                    <div className='d-flex align-items-center'>
                                        <HiShare />
                                        <p className='ms-1 mt-3 d-lg-none'>Share</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <img src={card1} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title caption-font">🔬️<span>Education</span></h4>
                        <div className='d-flex justify-content-between'>
                            <h5 className="card-title title-font">Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
                            <div className="dropdown">
                                <button className="btn btn-light text-dark " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots className='text-dark' />
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Edit</Link></li>
                                    <li><Link className="dropdown-item" to="#">Report</Link></li>
                                    <li><Link className="dropdown-item" to="#">Option 3</Link></li>
                                </ul>
                            </div>
                        </div>
                        <p className="card-text p-font">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center '>
                                <img src={writer1} alt="" />
                                <h2 className='writer-font ms-2 mt-1 d-none d-sm-none d-md-block justify-content-center align-items-center'>Sarah West</h2>
                                <div className='d-flex flex-column align-items-center d-lg-none '>
                                    <h2 className='writer-font mt-1 ms-1'>Sarah West</h2>
                                    <h2 className='fs-6 mt-1 ms-2'>1.4k views</h2>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className='d-flex align-items-center d-none d-sm-none d-md-flex'>
                                    <AiOutlineEye />
                                    <h2 className='fs-6 ms-2 mt-1 me-5'>1.4k views</h2>
                                </div>
                                <button className='border border-0 btn-light btn'>
                                    <div className='d-flex align-items-center'>
                                        <HiShare />
                                        <p className='ms-1 mt-3 d-lg-none'>Share</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <img src={card2} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title caption-font">🗓️<span>Meetup</span></h4>
                        <div className='d-flex justify-content-between'>
                            <h5 className="card-title title-font">Finance & Investment Elite Social Mixer @Lujiazui</h5>
                            <div className="dropdown">
                                <button className="btn btn-light text-dark " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots className='text-dark' />
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Edit</Link></li>
                                    <li><Link className="dropdown-item" to="#">Report</Link></li>
                                    <li><Link className="dropdown-item" to="#">Option 3</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center'>
                                <RiCalendarEventFill />
                                <h2 className='date-font ms-2 mt-1'>Fri, 12 Oct, 2018</h2>
                            </div>
                            <div className='d-flex align-items-center ms-5'>
                                <GoLocation />
                                <h2 className='fs-6 ms-2 mt-1'>Ahmedabad, India</h2>
                            </div>
                        </div>
                        <button type="button" className="btn border-secondary w-100 mt-1 mb-4"><span className='text-danger fw-bold'>Visit Website</span></button>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center '>
                                <img src={writer2} alt="" />
                                <h2 className='writer-font ms-2 mt-1 d-none d-sm-none d-md-block justify-content-center align-items-center'>Ronal Jones</h2>
                                <div className='d-flex flex-column align-items-center d-lg-none '>
                                    <h2 className='writer-font mt-1 ms-1'>Ronal Jones</h2>
                                    <h2 className='fs-6 mt-1 ms-2'>1.4k views</h2>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className='d-flex align-items-center d-none d-sm-none d-md-flex'>
                                    <AiOutlineEye />
                                    <h2 className='fs-6 ms-2 mt-1 me-5'>1.4k views</h2>
                                </div>
                                <button className='border border-0 btn-light btn'>
                                    <div className='d-flex align-items-center'>
                                        <HiShare />
                                        <p className='ms-1 mt-3 d-lg-none'>Share</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <h4 className="card-title caption-font">💼️<span>Job</span></h4>
                        <div className='d-flex justify-content-between'>
                            <h5 className="card-title title-font">Software Developer</h5>
                            <div className="dropdown">
                                <button className="btn btn-light text-dark " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots className='text-dark' />
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Edit</Link></li>
                                    <li><Link className="dropdown-item" to="#">Report</Link></li>
                                    <li><Link className="dropdown-item" to="#">Option 3</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center'>
                                <BsBriefcase />
                                <h2 className='date-font ms-2 mt-1'>Innovaccer Analytics Private Ltd.</h2>
                            </div>
                            <div className='d-flex align-items-center ms-5'>
                                <GoLocation />
                                <h2 className='fs-6 ms-2 mt-1'>Noida, India</h2>
                            </div>
                        </div>
                        <button type="button" className="btn border-secondary w-100 mt-1 mb-4"><span className='fw-bold text-success'>Apply on Timesjobs</span></button>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center '>
                                <img src={writer3} alt="" />
                                <h2 className='writer-font ms-2 mt-1 d-none d-sm-none d-md-block justify-content-center align-items-center'>Joseph Gray</h2>
                                <div className='d-flex flex-column align-items-center d-lg-none '>
                                    <h2 className='writer-font mt-1 ms-1'>Joseph Gray</h2>
                                    <h2 className='fs-6 mt-1 ms-2'>1.4k views</h2>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className='d-flex align-items-center d-none d-sm-none d-md-flex'>
                                    <AiOutlineEye />
                                    <h2 className='fs-6 ms-2 mt-1 me-5'>1.4k views</h2>
                                </div>
                                <button className='border border-0 btn-light btn'>
                                    <div className='d-flex align-items-center'>
                                        <HiShare />
                                        <p className='ms-1 mt-3 d-lg-none'>Share</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ms-5 mt-5 d-none d-sm-none d-md-block'>
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
                <div className='d-flex align-items-center mb-5'>
                    <AiOutlineExclamationCircle />
                    <h2 className='fs-6 ms-2 text-secondary mt-3'>Your location will help us serve better and extend a personalised experience.</h2>
                </div>

                <div>
                    <div className='d-flex ms-2 mb-3'>
                        <BiLike className='mt-1' />
                        <h2 className='fs-6 ms-2 text-uppercase'>Recommended  Groups</h2>
                    </div>
                    <div className='d-flex justify-content-between mb-3'>
                        <div className='d-flex align-items-center'>
                            <img className='img-fluid' src={group} alt="" />
                            <h2 className='fs-6 ms-2 mt-1'>Leisure</h2>
                        </div>
                        <button className='border border-0 rounded-pill px-3 fw-semibold'>Follow</button>
                    </div>
                    <div className='d-flex justify-content-between mb-3'>
                        <div className='d-flex align-items-center'>
                            <img className='img-fluid' src={group1} alt="" />
                            <h2 className='fs-6 ms-2 mt-1'>Activism</h2>
                        </div>
                        <button className='border border-0 rounded-pill px-3 fw-semibold'>Follow</button>
                    </div>
                    <div className='d-flex justify-content-between mb-3'>
                        <div className='d-flex align-items-center'>
                            <img className='img-fluid' src={group2} alt="" />
                            <h2 className='fs-6 ms-2 mt-1'>MBA</h2>
                        </div>
                        <button className='border border-0 rounded-pill px-3 fw-semibold'>Follow</button>
                    </div>
                    <div className='d-flex justify-content-between mb-3'>
                        <div className='d-flex align-items-center'>
                            <img className='img-fluid' src={group3} alt="" />
                            <h2 className='fs-6 ms-2 mt-1'>Philosophy</h2>
                        </div>
                        <button className='border border-0 rounded-pill px-3 fw-semibold'>Follow</button>
                    </div>
                </div>
                <div className='d-flex justify-content-end  mt-5'>
                    <Link to="#">See More...</Link>
                </div>
            </div>
        </div>
    );
};

export default PostCards;