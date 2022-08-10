import React from 'react';

// Styled
import './BlogStyled.css';

//import Header and Footer
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Hero from '../../Hero';

const Blog: React.FC = () => {
  return (
      <div className="blog">
          <Navbar />
            <Hero />
            <div className="blog_section">
                <h3 className='title_blog'> Blog </h3>
            <div className="card_section">
                
            </div>
            </div>
          <Footer />
      </div>
  );
}
export default Blog;