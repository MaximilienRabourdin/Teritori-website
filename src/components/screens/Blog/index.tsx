import React, {useState, useEffect} from 'react';

//import styled
import './BlogStyled.css';

//components 
import Navbar from '../../Navbar';
import Footer from '../../Footer';


//import Link from
import { Link } from 'react-router-dom';

//import client
import client from '../../../utils/client';

//Sanity.io import
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
    <div className="title_background_blog">
    <div className="blockText_blog"id='menu'>
    <img src="logo.svg" alt="Logo" className="white_logo" />
    <h1 className="Title_White_blog"> Teritori Blog</h1>
    <h2 className="second_title_blog">News, updates and podcasts</h2>
    </div>
    </div>
    <section>
    

        <div className='all_articles'>
            {posts.map((post) => (
                <article className='article' key={post.slug.current}>
                    <img className='img_article' src={post.mainImage.asset.url} />
                    <h4 className='title_article'>{post.title}</h4>
                    <p className='time_read'>3 min read</p>
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