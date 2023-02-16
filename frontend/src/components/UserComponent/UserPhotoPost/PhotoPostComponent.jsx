import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core';
import { ArrowDownwardOutlined, ArrowUpwardOutlined,
  ChatBubbleOutlined, MoreHorizOutlined, RepeatOneOutlined,
   ShareOutlined } from '@material-ui/icons';
import ReactTimeAgo from 'react-time-ago';  
import './PhotoPost.css' 
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser'
import { useSelector } from 'react-redux';
import ReasonForPostReport from './ReasonForPostReport';
import { Link } from 'react-router-dom';



// function LastSeen({ date }) {
//   return (
//     <div>
//      <ReactTimeAgo date={date} locale="en-US" timeStyle="round"/>
//     </div>
//   )
// }

function PhotoPostComponent() {
  const { userDetails } = useSelector(state => state.user)
  let userId = userDetails._id
  
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
  
  await axios.put('/reportPost/'+id).then((res)=>{

  })
}


const handleLike = async(id)=>{
  try {
    await axios.put('/addLike/'+id,{userId}).then((res)=>{
      getPosts();
    })
  } catch (error) {
    
  }
}


const handleDisLike = async(id)=>{
  try {
    await axios.put('/disLike/'+id,{userId}).then((res)=>{
      getPosts();
    })
  } catch (error) {
    console.log(error);
  }
}

  return (
    
   
      <div className='col-5'>
    {
      imagePost ?.map(imagepost=>{
        return( 
<>
          <div className="post">
          <div className="post__info">
            {
              imagepost.user.imageUrl ? <img style={{width:'45px',height:"40px" ,borderRadius:'20px'}} src={imagepost.user.imageUrl}/> :   <Avatar />
            }
          
          <Link to='/othersprofile' state={{id:imagepost.user._id}} style={{textDecoration:'none',color:'black'}} > <h6>{imagepost.user.firstName+" "+imagepost.user.lastName}</h6> </Link>  
         
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
              <div className='likeLength me-3'>
               <ArrowUpwardOutlined onClick={()=> handleLike(imagepost._id)} />
              <span>{imagepost.like.length}</span>
              </div>
               
               <div className='me-3'>
              <ArrowDownwardOutlined  onClick={()=> handleDisLike(imagepost._id)} />
              <span>{imagepost.dislike.length}</span>
               </div>

            </div>
            <RepeatOneOutlined />
            <ChatBubbleOutlined />
            <div className="post__footerLeft">
            
              {/* <button  className="post__report" onClick={()=> reportPost(imagepost._id)} >Report</button> */}
              <ReasonForPostReport postData={(imagepost._id)}/>
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
