import React from 'react';
import BlogPost from './BlogPost'

const BlogList = props => {
    const blogList = props.blogs.map((blog, index) => 
        <BlogPost 
            title={blog.title}
            subtitle={blog.subtitle}
            author={blog.author}
            date={blog.date}
            key={index + blog.title}
        />
    );
    
    return (
        <div className="blogList">
            {blogList}
            <button>OLDER POSTS</button>
        </div>
    );
};

export default BlogList;
