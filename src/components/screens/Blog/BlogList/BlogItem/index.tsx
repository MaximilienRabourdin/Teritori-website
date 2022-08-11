import React from 'react';
import './BlogItemStyled.css';

// Router -> import Link
import { Route } from 'react-router-dom';


const BlogItem: React.FC = () => { 
    blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
}) => {
  return (
    <div className='blogItem-wrap'>
         <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Route className='blogItem-Route' to={`/blog/${id}`}>
          ➝
        </Route>
    
    </div>
  );
}

export default BlogItem;
