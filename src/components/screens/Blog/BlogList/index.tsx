import React from 'react';
import './cardgrantStyled.css';
import BlogItem from './BlogItem';

const BlogList: React.FC = () => { 
return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
)
} 

export default BlogList;