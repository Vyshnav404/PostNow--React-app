import React from 'react'
import PostnowBox from './PostnowBox'
import './Feed.css'
import Post from './Post'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Feed() {
  const [posts,setPost] = useState([])
 
  useEffect(()=>{
    // axios.defaults.baseURL = 'http://localhost:8080'
      axios.get('/Allquestions').then((res)=>{
        setPost(res.data.reverse())
      }).catch((e)=>{
        console.log(e);
      })
  },[])

  return (
    <div className='feed col-lg-5 col-sm-12'>
     <PostnowBox />
     {posts.map((post,index)=>(
      <Post key = {index} post={post} />
     ))}
     {/* <Post />
     <Post />
     <Post /> */}
    </div>
  )
}

export default Feed
