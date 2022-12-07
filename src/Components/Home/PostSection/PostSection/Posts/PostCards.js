import React from 'react';
import card from "../../../../../Assets/Rectangle 5.jpg";
import card1 from "../../../../../Assets/Rectangle 5 (1).jpg";
import card2 from "../../../../../Assets/Rectangle 5 (2).jpg";
import writer from "../../../../../Assets/Rectangle 3 (1).jpg";
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { HiShare } from 'react-icons/hi';

const PostCards = () => {
    return (
        <div className='container mt-4'>
            <div class="card">
                <img src={card} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h4 class="card-title fs-5">✍️<span>Article</span></h4>
                    <div className='d-flex justify-content-between'>
                        <h5 class="card-title fs-3">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                        <BsThreeDots />
                    </div>
                    <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center '>
                            <img src={writer} alt="" />
                            <h2 className='fs-5 ms-2'>Sarthak Kamra</h2>
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
    );
};

export default PostCards;