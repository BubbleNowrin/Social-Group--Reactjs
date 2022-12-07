import React from 'react';
import banner from "../../../Assets/Rectangle 2.png"
import './Banner.css';


const Banner = () => {
    return (
        <div className='custom position-relative mt-1'>
            <h2 className='fs-1 text-light fw-bold computer'>Computer Engineering</h2>
            <h2 className='fs-5 text-light fw-normal engineer'>142,765 Computer Engineers follow this</h2>
        </div>
    );
};

export default Banner;