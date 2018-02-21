import React from 'react';

const BlogPost = props => {
    return (        
        <section className="blogEntry">
            <div className="titles">
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
            <h3>Posted by <span>{props.author}</span> on {props.date}</h3>
        </section>
    );
};

export default BlogPost;
