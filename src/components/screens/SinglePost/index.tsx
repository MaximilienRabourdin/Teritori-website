import React, {useState, useEffect} from 'react';
import { Routes, useParams } from 'react-router-dom';
import './SinglePostStyled.css';

// //components 
import Navbar from '../../Navbar';
// import Footer from '../../Footer';
import Loading from '../../Loading';

//import Link from
import { Link } from 'react-router-dom';

//import client
import client from '../../../utils/client';

//import SANITY.io
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';


const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}


const Blogpost = {
  title: '',
  body: '',
  name: '',
  authorImage: '',
  mainImage: {asset: {url:''}}
};

const Categorypost = {
  categories: {category: {name:''}}
}

const SinglePost: React.FC = () => {

    const [singlePost, setSinglePost] =  useState(Blogpost);
    const [categories, setCategory] = useState(Categorypost)
    const [isLoading, setIsLoading] = useState(true);
    const {slug} = useParams()

    useEffect(() => {
        client
          .fetch(
            `*[slug.current == "${slug}"] {
            title,
            body,
            "name":author->name,
            "authorImage": author->image,
            categories {
              category -> {
              name,
          },
            mainImage {
              asset -> {
                _id,
                url
              },
              alt
            },
          }`
          )
          .then((data) => setSinglePost(data[0]))
        setIsLoading(false)
      }, [slug])

      // We want to render the categorie blog
     useEffect(() => {
        client
        .fetch(
            `*[_type == "category"] {
            title,
        }`
        )
        .then((data) => setCategory(data))
        .catch(console.error)
    }, [])

    return ( 

<div className="all_singlepost">
    <Navbar />
         <> {isLoading ?
              <Loading />
    //      if it's not loading show all components  
             :
             <section className='section_singlepost'>
              <button className='btnback_article'>
                <Link className='link_article' to="/blog">
                  ↩  Read Full Articles
                </Link>
                </button>

          <div className="titlesection_singlepost">
            <div className="author_singlepost">
            {categories.map((category) => (
           <div className = "flex flex-wrap justify-center">                                    
        <p>{category.title}</p>
       </div>
))}
            </div>

              <h1 className='title_singlepost'>{singlePost.title}</h1>
               {singlePost.mainImage && singlePost.mainImage.asset && (
                <img 
                className='img_singlepost'
                src={singlePost.mainImage.asset.url} 
                alt={singlePost.title} 
                title={singlePost.title} />
               )}
          </div>

          <div className="block__content">
            <BlockContent
              blocks={singlePost.body}
              projectId="2hp9gld0"
              dataset="production"
            />
          </div>       
             </section>
               }
             </>
        {/* <Footer /> */}
</div>
    
    )
    } 
    
    export default SinglePost;