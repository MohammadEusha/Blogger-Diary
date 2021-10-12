import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (
        <nav className={(isSticky || isCollapsed) ? "navbar  navbar-expand-lg navbar-dark bg-dark fixed-top" : "navbar  navbar-expand-lg navbar-light color text-dark"}>
            <div class="container-fluid">
                <div>
                    {/* <img className="transaction-area " style={{ height: "50px", }} src={logo} alt="" /> */}
                    <a className="navbar-brand color ms-3 h1" href="#home">Blogger Diary</a>
                </div>
                <button onClick={
                    () => setCollapsed(!isCollapsed ? 'show' : null)} class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ms-auto  mb-2 mb-lg-0 h5">
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link color" aria-current="page" href="#about">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/createBlog">Create Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link color" to="/signIn">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;