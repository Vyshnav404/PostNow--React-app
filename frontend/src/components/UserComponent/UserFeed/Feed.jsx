import React from 'react'
import PostnowBox from './PostnowBox'
import './Feed.css'
import Post from './Post'

function Feed() {
  return (
    <div className='feed col-lg-5 col-sm-12'>
     <PostnowBox />
     <Post />
     <Post />
     <Post />
    </div>
  )
}

export default Feed
