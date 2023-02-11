import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core';
import { ArrowDownwardOutlined, ArrowUpwardOutlined,
  ChatBubbleOutlined, MoreHorizOutlined, RepeatOneOutlined,
   ShareOutlined } from '@material-ui/icons';
import ReactTimeAgo from 'react-time-ago';  
import './PhotoPost.css' 
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser'


// function LastSeen({ date }) {
//   return (
//     <div>
//      <ReactTimeAgo date={date} locale="en-US" timeStyle="round"/>
//     </div>
//   )
// }

function PhotoPostComponent() {
  
  const [imagePost, setImagePost] = useState([])

  const getPosts = async()=>{
    await axios.get('/getAllPosts').then((response)=>{
      setImagePost(response.data)
    })
  }

  useEffect(()=>{
    getPosts();
  },[])

 const reportPost = async(id)=>{
  console.log("iidiiiddd",id)
  await axios.put('/reportPost/'+id).then((res)=>{

  })
}

  return (
    
   
      <div className='col-5'>
    {
      imagePost ?.map(imagepost=>{
        return( 
<>
          <div className="post">
          <div className="post__info">
            <Avatar />
            <h4>User Name</h4>
         
            {/* <small>
              <LastSeen date="createdAt"/>
            </small> */}
          </div>
          <div className="post__body">
            {
              <img src={imagepost.postUrl} alt="" />
            }  
            <hr />
          </div>
            <div>
              <p>{ReactHtmlParser(imagepost.caption)}</p>
            </div>
          <div className="post__footer">
            <div className="post__footerAction">
              <ArrowUpwardOutlined />
              <ArrowDownwardOutlined />
            </div>
            <RepeatOneOutlined />
            <ChatBubbleOutlined />
            <div className="post__footerLeft">
            
              <button  className="post__report" onClick={()=> reportPost(imagepost._id)} >Report</button>
            </div>
          </div>
          </div>
         
          </>
        )
        })
      }
      </div>
     
     

  )
}

export default PhotoPostComponent
