import React, { useEffect, useState } from 'react'
import './Comment.css'
import axios from 'axios'
import { Avatar } from '@material-ui/core'

function PostComment({ postData }) {
  const [comments, setComments] = useState([])

  useEffect(()=>{
    const fetchComments = async()=>{
      const response = await axios.get('/getcomments/'+postData);
      setComments(response.data.comment)
    }
    fetchComments();
  },[postData])

  return (
    <div className='comment_head' style={{height:'300px',overflowY:'scroll'}}>
      {
        comments.map((comment) =>{
          return(
            <>
            <div className='comment__profile'>
              {
                comment.userId.imageUrl ? <img style={{width:'45px',height:'40px',borderRadius:'20px'}} src={comment.userId.imageUrl} /> : <Avatar />
              }
              <div className='comment__body'>
              <p>{comment.userId.firstName+" "+ comment.userId.lastName}</p>   
              <h5>{comment.text}</h5>
             </div>
            </div>
             <hr/>
            </>
          )
        })
      }
    
    </div>
  )
}

export default PostComment
