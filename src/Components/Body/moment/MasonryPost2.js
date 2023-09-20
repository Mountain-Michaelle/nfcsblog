import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/CSS/MasonryPost.css';
import { categoryColors } from '../../../Assets/JS/categoryColors';


export default function MasonryPost2({post, index, tagsOnTop}){
    console.log("single post now ", post)
    // const style = (image) => {
    //     return {backgroundImage: `url("${require(`../../../Assets/Images/${image}`)}")`}
    // }

    const pst = post.slice(-1)[0]

    console.log('logo ', pst)
    //const {title, categories, image, date } = post
    const imageBg = {backgroundImage: `url(${post.image})`}
    const style = {...imageBg, ...post.style}
    console.log("title ", pst.categories)
return(
        <Link key={index} className='masonry__post overlay' style={style} to="#">

            <div className='post__text'>
                <div className='tags__container'>
                    {pst.categories.map((tag, index) =>
                        <span key={index} className='tag' style={{ backgroundColor:categoryColors[tag] }}>
                        {tag.toUpperCase()}
                    </span>)}  
                </div>
                <div>
                    <h2>{pst.title}</h2> 
                    <span className='post__date'>{pst.date} </span>
                </div>
            </div>
            
        </Link>
    )
}

