import React from 'react';
import BlogCards from '../BlogCards/BlogCards';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <section >
            <Navbar />
            <Header />
            <BlogCards />
        </section>
    );
};

export default Home;