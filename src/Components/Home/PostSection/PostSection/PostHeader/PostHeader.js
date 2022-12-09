import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { MdOutlineGroupAdd } from 'react-icons/md';
import { VscTriangleDown } from 'react-icons/vsc';

const PostHeader = () => {
    return (
        <div className='container mt-4'>
            <nav className="navbar navbar-expand-lg border-bottom">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">All Posts(32)</Link>
                    <button type="button" className="px-3 py-2 btn-light border border-0 text-dark fw-bold d-lg-none">Filter : All <VscTriangleDown className='ms-2' /></button>

                    <button className="navbar-toggler d-none d-sm-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-none d-sm-none d-md-block" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Article</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="#">Event</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="#">Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="#">Job</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <button type="button" className="px-3 py-2 btn-light border border-0 text-dark fw-bold">Write a Post <AiOutlineCaretDown /></button>
                            <button type="button" className="px-3 py-2 bg-primary ms-3  fw-bold border border-0 text-white" >
                                <MdOutlineGroupAdd className="me-1" />
                                Join Group
                            </button>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default PostHeader;