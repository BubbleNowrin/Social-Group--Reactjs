import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { MdOutlineGroupAdd } from 'react-icons/md';

const PostHeader = () => {
    return (
        <div className='container mt-4'>
            <nav class="navbar navbar-expand-lg border-bottom">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">All Posts(32)</Link>
                    <button class="navbar-toggler d-none d-sm-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-none d-sm-none d-md-block" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="#">Article</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="#">Event</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="#">Education</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="#">Job</Link>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            <button type="button" class="px-3 py-2 btn-light border border-0 text-dark fw-bold">Write a Post <AiOutlineCaretDown /></button>
                            <button type="button" class="px-3 py-2 bg-primary ms-3  fw-bold border border-0 text-white" >
                                <MdOutlineGroupAdd class="me-1" />
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