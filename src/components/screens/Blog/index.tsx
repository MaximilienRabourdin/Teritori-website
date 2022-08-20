import React, {useState, useEffect} from 'react';

//import styled
import './BlogStyled.css';

//components 
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Hero from '../../Hero';

//import Link from
import { Link } from 'react-router-dom';

//import client
import client from '../../../utils/client';

//Sanity.io import
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const Blog: React.FC = (
) => {

const [posts, setPosts] = useState([] as any[]);
      
useEffect(() => {
    client
    .fetch(
        `*[_type == "post"] {
            title,
            slug,
            body,
            "name":author->name,
            "authorImage": author->image,
            mainImage {
                asset -> {
                    _id,
                    url
                },
                alt
            }
        }`
    )
    .then((data) => setPosts(data))
    .catch(console.error)
}, [])
 
return (  
<div className="blog">
<Navbar />


    <div className="all_blog">
        <Hero />
    <section>
    <h3 className='title_blog'> BLOG</h3>

        <div className='all_articles'>
            {posts.map((post) => (
                <article className='article' key={post.slug.current}>
                    <img className='img_article' src={post.mainImage.asset.url} />
                    <h4 className='title_article'>{post.title}</h4>
                    <p className='time_read'>3min read</p>
                    <div className="description_post">
                    <div className="sectiontop">
                    <img className='img_author_post'
                    src={urlFor(post.authorImage).width(200).url()}
                    alt='author'/>
                    <h4 className='authorname_post'>
                    {post.name}
                    </h4>
                    </div>
                    <div className="sectionbottom">
                    <button className='button_article'>
                    <Link  className='link_article' to={`/blog/${post.slug.current}`}> Know more</Link>
                    </button>
                    </div>
                    </div> 

                </article>

            ))}
        </div>
    </section>
    
    </div>
    <Footer />
</div>

)
} 

export default Blog;