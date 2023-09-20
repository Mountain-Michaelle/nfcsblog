import React from 'react';
import MasonryPost from './MasonryPost';
import '../../../Assets/CSS/PostMasonry.css';
import MasonryPost2 from './MasonryPost2';

export default function PostMasonry({posts, pst, columns, tagsOnTop}) {
    return(
        <section className='masonry' style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`}} >
            
            <MasonryPost {...{posts, pst, columns, tagsOnTop}} />
           
        </section>
    )
}
