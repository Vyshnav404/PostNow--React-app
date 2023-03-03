import { Avatar } from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowUpwardOutlined,
     ChatBubbleOutlined, MoreHorizOutlined, RepeatOneOutlined,
      ShareOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import './Post.css'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import CloseIcon from '@material-ui/icons/Close';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllQuestion } from '../../../redux/features/allQuestionSlice';



 function LastSeen({ date }) {
  return (
    <div>
     <ReactTimeAgo date={date} locale="en-US" timeStyle="round"/>
    </div>
  )
}

function Post({post}) {
  const { allQuestion } = useSelector(state => state.allQuestion)
  const { userDetails } = useSelector(state => state.user)
  const { tokenData } = useSelector(state => state.user)
  console.log("userDetails",userDetails)
  let userId = userDetails._id
  const Close = (<CloseIcon />)
  const dispatch = useDispatch();

const getQuestion = async()=>{
  try {
    await axios.get("/Allquestions",{
      headers:{
        Authorization:tokenData,
      },
    }).then((res)=>{
      dispatch(setAllQuestion(res.data.reverse()));
    })
  } catch (error) {
    console.log(error);
  }
}


  const handleUpvote = async(id)=>{
    try {
      await axios.put('/upvote/'+id,{userId},{
        headers:{
          Authorization:tokenData
        }
      }).then((res)=>{
        getQuestion()
      })
    } catch (error) {
      console.log(error);
    }
  }

  const handleDownvote = async(id)=>{
    try {
      console.log("in front",userId);
      await axios.put('/downvote/'+id,{userId},{
        headers:{
          Authorization:tokenData
        },
        
      })
    } catch (error) {
      console.log(error);
    }
  }
  

    
  return (
    
  
    <div className="post">
    <div className="post__info">
      {
        post.user.imageUrl ? <img style={{ width:'45px',height:"40px",borderRadius:'20px'}} src={post.user.imageUrl}/> :  <Avatar />
      }
     
      <h4>{post.user.firstName}</h4>
   
      <small>
        <LastSeen date={post?.createdAt}/>
      </small>
    </div>
    <div className="post__body">
      <div className="post__question">
        
      <Link to='/answerpage' state={{id:post?._id}} style={{textDecoration:'none',color:"black"}}><p>{post?.questionName}</p></Link>
        {/* <button  onClick={()=>{
          setIsModalOpen(true);
          console.log(post?._id);
        } }     
          className="post__btnAnswer">
          Answer
        </button>
        <Modal 
        open = {isModalOpen} closeIcon={Close} onClose={()=> setIsModalOpen(false)}
        closeOnEsc
        center 
        closeOnOverlayClick={false}
        styles={{
          overlay:{
            height:'auto'
          },
        }}>
          <div className='modal__question'>
            <h1>{post?.questionName}</h1>
            <p>asked by {" "}<span className='name'>Username</span>{" "}on{" "}
            <span className='name'>{new Date(post?.createdAt).toLocaleString()}</span></p>
          </div>
          <div className='modal__answer'>
            <ReactQuill value={answer} onChange={handleQuill} placeholder='Enter your answer' />
          </div>
          <div className='modal__button'>
                      <button className='cancle' onClick={()=> setIsModalOpen(false)}>
                        Cancel
                      </button>
                      <button  onClick={handleSubmit} type='submit' className='add' >
                        Add Answer
                      </button>
                    </div>
        </Modal> */}
      </div>
     {
      post.questionUrl !=='' && <img src={post.questionUrl} alt="" />
     }
    </div>
    <div className="post__footer">
      <div className="post__footerAction">
        <div className='likeLength me-3'>
        <ArrowUpwardOutlined onClick={()=>handleUpvote(post._id)} />
        <span>{post.upVote?.length}</span>
        </div>
        <div>
        <ArrowDownwardOutlined onClick={()=>handleDownvote(post._id)}/>
        <span>{post.downVote?.length}</span>
        </div>
      </div>
      <RepeatOneOutlined />
      <ChatBubbleOutlined />
      <div className="post__footerLeft">
        <ShareOutlined />
        <MoreHorizOutlined />
      </div>
    </div>
    <p
      style={{
        color: "rgba(0,0,0,0.5)",
        fontSize: "12px",
        fontWeight: "bold",
        margin: "10px 0",
      }}
    >
     {post?.allAnswers.length}Answers
    </p>

    {/* <div
      style={{
        margin: "5px 0px 0px 0px ",
        padding: "5px 0px 0px 20px",
        borderTop: "1px solid lightgray",
      }}
      className="post__answer"
    >
        
          
              {
                post?.allAnswers?.map((_a)=>(
                <>
                
                <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "10px 5px",
              borderTop: "1px solid lightgray",
            }}
            className="post-answer-container">

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#888",
              }}
              className="post-answered"
            >
              <Avatar  />
              <div
                style={{
                  margin: "0px 10px",
                }}
                className="post-info">
                  <p>Username</p>
                <span>
                  <LastSeen date = {_a?.createdAt}/>
                </span>
              </div>
            </div>
            <div className="post-answer">{ReactHtmlParser(_a?.answer)}</div>
          </div>
            </>))
              }
        
      
    </div> */}
  </div>

  
  
    )
}

export default Post
