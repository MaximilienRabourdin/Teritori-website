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

// impor Share Button and Icons
import {
 TwitterShareButton,
} from "react-share";
import {PrimaryBox} from '../../Boxes/PrimaryBox';
import TertiaryBox from '../../Boxes/TertiaryBox';


const Blogpost = {
  title: '',
  body: '',
  name: '',
  time: '',
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
          time,
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


    //create share button function
const shareButtonProps = {
  url: `*[slug.current == "${slug}"]`,
  network: "Facebook",
  text: "Give it a try - react-custom-share component",
  longtext:
    "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."
};

    return ( 

<div className="all_singlepost">
    <Navbar />
         <> {isLoading ?
              <LoadingFullScreen />
    //      if it's not loading show all components  
             :
        
             <PrimaryBox 
             mainContainerStyle={{padding: "6rem", backgroundColor: '#0f0f0f',}} style={{margin: "0 2rem 2rem 0", width: "60%", height: "90%", }} >   
              <>
              <button className='btnback_article'>
              <TertiaryBox 
              squaresBackgroundColor="#0f0f0f" 
              mainContainerStyle={{padding: "1rem 2rem"}} 
              style={{margin: "0 2rem 2rem 0"}}>
                <Link className='link_article' to="/blog">
                  ↩  Back to blog
                </Link>
                </TertiaryBox>
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
              className='text_content'
              blocks={singlePost.body}
              projectId="dsp47i30"
              dataset="production"
            />
          </div>

          <div className="sharebutton_section">
          <TwitterShareButton url={`https://capable-sfogliatella-e97b41.netlify.app/blog/${slug}`}>
          <img className='twitter-icon_singleblog' src="/twitter.svg" alt="Twitter" />
          </TwitterShareButton>
          </div>
          </>
          </PrimaryBox>
               }
             </>
        <Footer />
</div>
    
    )
    } 
    
    export default SinglePost;