import React from 'react';
import banner from "../../../Assets/Rectangle 2.png"
import './Banner.css';


const Banner = () => {
    return (
        <div className='custom position-relative mt-1'>
            <h2 className='text-light computer'>Computer Engineering</h2>
            <h2 className='text-light engineer'>142,765 Computer Engineers follow this</h2>
        </div>
    );
};

export default Banner;