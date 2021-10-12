import React from 'react';
import BlogCards from '../BlogCards/BlogCards';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <section style={{ backgroundColor: "#12161f", color: "white", overflowX: "hidden" }}>
            <div className="header">
                <Navbar />
                <Header />
            </div>
            <div>
                <BlogCards />
            </div>
            <Footer />
        </section>
    );
};

export default Home;