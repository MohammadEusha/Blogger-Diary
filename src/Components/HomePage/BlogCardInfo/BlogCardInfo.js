import React from 'react';

const BlogCardInfo = (props) => {
    const { title, content, image, blogLink } = props.blog
    return (
        <div className="col-md-3 m-3 text-dark">
            <a style={{ textDecoration: "none" }} href={`${blogLink}`} target="_blank" alt="" rel="noreferrer">
                <div class="card card-bg focus h-100 mb-3 card-bg  border border-secondary border-3 rounded">
                    <img src={image} className="card-img-top img-fluid h-100 w-100" alt="..." />
                    <div className="card-body">
                        <h1 className="text-dark display-6">{title}</h1>
                        <h5 className="text-dark">{content}</h5>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default BlogCardInfo;