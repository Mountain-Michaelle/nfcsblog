import React from 'react';
import '../../Assets/CSS/Home.css';
import PostMasonry from './moment/PostMasonry';
import PostMasonry2 from './moment/PostMasonry2';
import trending from '../Data/trending';
import featured from '../Data/featured';
import Gallery from './NFCSGallery/Gallery';
import Footer from '../Footer/Footer';

const featuredConfig = {
 0: {
    gridArea: '1 / 1 / 2 / 3',
    height: '300px',
 },
 1: {
    height: '220px',
 },
 3: {

 }
}
const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3'
    }
}

const lastFeatured = featured.slice(-1)[0]


const mergeStyle = function (posts, config){
    posts.forEach((post, index) => {
        post.style = config[index]
    })
}
mergeStyle(trending, trendingConfig)
mergeStyle(featured, featuredConfig)


function Home() {
const bg = {
    backgroundColor: 'red',
}
    const windowWidth = window.innerWidth 
    const pixel = 2;
    console.log("single home post ", lastFeatured)
    return(
        <section className='container home' style={{}}>
            <div className='row'>
                <h2>Featured Post</h2>
                <section className="featured__post">   
                
                    <PostMasonry posts={featured} columns={2} />
                    {/* <PostMasonry2 post={featured} tagsOnTop={true} /> */}
                      
                </section>

                <h2>Trending Posts</h2>
                <PostMasonry posts={featured} columns={3} />

            <h2 className="nfcs__gallery" style={{marginBottom: '2rem', textAlign:'center'}}>NFCS Gallery</h2>
            <section className='nfcs__gallery'>
                <Gallery  background={bg} windowWidth={windowWidth} pixel={pixel} trend={trending} />
            </section>
            </div>
        </section>
        )
    }
export default Home;