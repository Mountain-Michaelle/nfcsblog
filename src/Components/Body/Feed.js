import React from 'react'
import '../../Assets/CSS/Feed.css';
import NavBar from '../Navigation/NavBar';
import Home from './Home';

function Feed({navLink}) {
  return (
    
    <div className="feed">
        <Home navLink={navLink} />
    </div>
  )
}

export default Feed