import React, {useState, useEffect} from 'react';
import { Routes, useParams } from 'react-router-dom';
import './SinglePostStyled.css';

// //components 
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import LoadingFullScreen from '../../LoadingFullScreen';

//import Link from
import { Link } from 'react-router-dom';

//import client
import client from '../../../utils/client';

//import Sanity
import BlockContent from '@sanity/block-content-to-react';


const Blogpost = {
  title: '',
  body: '',
  name: '',
  mainImage: {asset: {url:''}}
};


const SinglePost: React.FC = () => {

    const [singlePost, setSinglePost] =  useState(Blogpost);
    const [isLoading, setIsLoading] = useState(true);
    const {slug} = useParams()

    useEffect(() => {
      client
        .fetch(
          `*[slug.current == "${slug}"] {
          title,
          body,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
        )
        .then((data) => setSinglePost(data[0]))
      setIsLoading(false)
    }, [slug])

    return ( 

<div className="all_singlepost">
    <Navbar />
         <> {isLoading ?
              <LoadingFullScreen />
    //      if it's not loading show all components  
             :
             <section className='section_singlepost'>
              <button className='btnback_article'>
                <Link className='link_article' to="/blog">
                  ↩  Read Full Articles
                </Link>
                </button>

          <div className="titlesection_singlepost">
              <h1 className='title_singlepost'>{singlePost.title}</h1>
            
          
               {singlePost.mainImage && singlePost.mainImage.asset && (
                <img 
                className='img_singlepost'
                src={singlePost.mainImage.asset.url} 
                alt={singlePost.title} 
                title={singlePost.title} />
               )}

          <BlockContent
              blocks={singlePost.body}
              projectId="dsp47i30"
              dataset="production"
            />
          </div>

             </section>
               }
             </>
        <Footer />
</div>
    
    )
    } 
    
    export default SinglePost;