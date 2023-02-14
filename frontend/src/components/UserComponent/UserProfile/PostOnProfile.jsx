import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import ReactHtmlParser from 'html-react-parser'
import { Avatar } from '@material-ui/core';
import { ArrowDownwardOutlined, ArrowUpwardOutlined,
  ChatBubbleOutlined, MoreHorizOutlined, RepeatOneOutlined,
   ShareOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';

export default function PostOnProfile({ userData }) {
const { userDetails } = useSelector(state => state.user)
 let id = userData._id;
 const [state , setState] = useState([])
 const handlePost = async()=>{
    try {
        await axios.get('/postOnProfile/'+id).then(async(res)=>{
           await setState(res.data)
        })
    } catch (error) {
        console.log(error);
    }
}

console.log("tttaaa",state);
 useEffect(()=>{
    handlePost();
 },[])
 
  return (
    <div className='col-5'>
    {
      state ?.map(newState=>{
        return( 
<>
          <div className="post">
          <div className="post__info">
            <img src={userDetails.imageUrl} alt=""  style={{width:'10%', borderRadius:'50%'}}/>
            <h4>User Name</h4>
         
            {/* <small>
              <LastSeen date="createdAt"/>
            </small> */}
          </div>
          <div className="post__body">
            {
              <img src={newState.postUrl} alt="" />
            }  
            <hr />
          </div>
            <div>
              <p>{ ReactHtmlParser(newState.caption) }</p>
            </div>
          <div className="post__footer">
            <div className="post__footerAction">
              <ArrowUpwardOutlined />
              <ArrowDownwardOutlined />
            </div>
            <RepeatOneOutlined />
            <ChatBubbleOutlined />
            <div className="post__footerLeft">
            
              <button  className="post__report me-2" onClick={()=> editPost(newState._id)} >Edit</button>
              <button  className="post__report " onClick={()=> deletePost(newState._id)} >Delete</button>
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
