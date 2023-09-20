import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/CSS/MasonryPost.css';
import { categoryColors } from '../../../Assets/JS/categoryColors';


export default function MasonryPost({posts, tagsOnTop}){
    const path = (image)=> {
        return image
    }

    const style = (image) => {
        return {backgroundImage: `url("${require(`../../../Assets/Images/${image}`)}")`}
    }
    return(
        
        <>
            {posts.map((post, index) => {
                const imageBg = {backgroundImage: `url(${post.image})`}
                const style = {...imageBg, ...post.style}

                return(
                    <Link key={index} className='masonry__post overlay' style={style} to={post.link}>
                        <div className='post__text' style={{justifyContent: tagsOnTop ? 'space-between' : 'flex-end'}}>
                            <div className='tags__container'>
                                {post.categories.map((tag, index) =>
                                 <span key={index} className='tag' style={{ backgroundColor:categoryColors[tag] }}>
                                    {tag.toUpperCase()}
                                </span>)}  
                            </div>
                            <div>
                               <h2>{post.title}</h2> 
                               <span className='post__date'>{post.date} </span>
                            </div>
                        </div>
                       
                    </Link>
                )
            })}
        </>
    )
}

