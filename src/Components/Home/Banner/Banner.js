import React from 'react';
import banner from "../../../Assets/Rectangle 2.png"
import './Banner.css';
import { IoArrowBackSharp } from "react-icons/io5"


const Banner = () => {
    return (
        <div className='custom position-relative'>
            <h2 className='text-light computer'>Computer Engineering</h2>
            <h2 className='text-light engineer'>142,765 Computer Engineers follow this</h2>
            <IoArrowBackSharp className='icon d-lg-none' />
            <button type="button" class="btn btn-outline-light join-btn d-lg-none">Join Group</button>
        </div>
    );
};

export default Banner;