import React, { useEffect, useState } from 'react'
import { ArrowDownwardOutlined, ArrowUpwardOutlined,
    ChatBubbleOutlined, MoreHorizOutlined, RepeatOneOutlined,
     ShareOutlined } from '@material-ui/icons';
import axios from 'axios';     
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSingleQuestion } from '../../../redux/features/singleQuestionSlice'
import { useSelector } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import { Avatar } from '@material-ui/core'
import ReactTimeAgo from 'react-time-ago'
import { Modal } from 'react-responsive-modal'
import ReactQuill from "react-quill";
import { useNavigate } from 'react-router-dom';
import './Answer.css'
 
 function LastSeen({ date }) {
  return (
    <div>
     <ReactTimeAgo date={date} locale="en-US" timeStyle="round"/>
    </div>
  )
}


function AnswerComponent(){

    const { questionDetails } = useSelector(state => state.singleQuestion)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [question,setQuestion]= useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [answer,setAnswer] = useState('')
    const Close = (<CloseIcon />)


    const location = useLocation();
  let qid = location.state?.id;
 
  const handleQuill = (value)=>{
    setAnswer(value)
  }

  const getOneQuestion = async()=>{
    await axios.get('/onequestion/'+qid).then((res)=>{
       console.log("datas",res.data)
       setQuestion(res.data)
       dispatch(setSingleQuestion(res.data))
      });
  }

  
  useEffect(()=>{
    getOneQuestion()
  },[])
  
 const handleSubmit = async()=>{
  if(questionDetails?._id && answer !==''){
    const config = {
      headers:{
        "Content-Type":"application/json"
      }
    }
    const body = {
      answer : answer,
      questionId : questionDetails?._id
    }
    await axios.post('/answers',body,config).then((res)=>{
      console.log("answer is comming",res.data)
      alert("Answer added successfully")
      setIsModalOpen(false)
      navigate('/answerpage')
    })
  }
 }

  console.log("question details",questionDetails)


    return(
        <div className="post">
      <div className="post__info">
        <Avatar />
        <h4>User Name</h4>
     
        <small>
          <LastSeen date={questionDetails?.createdAt}/>
        </small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>{questionDetails?.questionName}</p>
          <button  onClick={()=>{
            setIsModalOpen(true);
           
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
              <h1>{questionDetails?.questionName}</h1>
              <p>asked by {" "}<span className='name'>Username</span>{" "}on{" "}
              <span className='name'>{new Date(questionDetails?.createdAt).toLocaleString()}</span></p>
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
          </Modal>
        </div>
       {
        questionDetails.questionUrl !=='' && <img src={questionDetails.questionUrl} alt="" />
       }
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <RepeatOneOutlined />
        <ChatBubbleOutlined />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
      {/* <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
       {post?.allAnswers.length}Answers
      </p> */}
  
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
export default AnswerComponent