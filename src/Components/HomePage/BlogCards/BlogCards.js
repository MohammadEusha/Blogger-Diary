import React from 'react';
import { useSelector } from 'react-redux';
import BlogCardInfo from '../BlogCardInfo/BlogCardInfo';
import './BlogCards.css'

const BlogCards = () => {
    const blogs = useSelector((state) => {
        return state.blogs.blogsList;
    })
    console.log("blog", blogs);

    // const createdBlogs = useSelector((state) => {
    //     return state.blogs.createBlog;
    // })

    return (
        <div id="blog">
            <h1 className="text-center text-light display-2 mt-5 pt-5">Blogs About Retro Tech</h1>
            <div className="row d-flex justify-content-center mb-5 pb-5">
                {
                    blogs?.map(blog => <BlogCardInfo blog={blog}></BlogCardInfo>)
                }
                {/* {
                    createdBlogs?.map(blog => <BlogCardInfo blog={blog}></BlogCardInfo>)
                } */}
            </div>
        </div>
    );
};

export default BlogCards;