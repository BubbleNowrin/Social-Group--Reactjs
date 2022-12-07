import React from 'react';
import { Link } from 'react-router-dom';

const PostHeader = () => {
    return (
        <div className='container mt-4'>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">All Posts(32)</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
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
                                <Link class="nav-link active">Job</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default PostHeader;