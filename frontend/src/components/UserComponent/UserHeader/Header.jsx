import React from 'react'
import  logo from '../../../assets/mylogo.png'
import HomeIcon from '@material-ui/icons/Home';
import {AssessmentOutlined, Close, ExpandMore, FeaturedPlayListOutlined, NotificationsOutlined, PeopleAltOutlined, Search} from '@material-ui/icons/'
import { Avatar, Button, Input } from '@material-ui/core';
import { Modal } from 'react-responsive-modal'
import CloseIcon from '@material-ui/icons/Close';
import './Header.css'
import { useState } from 'react';
import 'react-responsive-modal/styles.css'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { userDetails }= useSelector(state=>state.user)
  console.log(userDetails,"come on daa");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl,setInputUrl] = useState('')
  const [question, setQuestion] = useState('')
  const Close = (<CloseIcon />)
  const navigate = useNavigate()

  const handleSubmit = async()=>{
    if(question !== ""){

      const config = {
        headers:{
          "Content-Type":"application/json",
        

        }
      }

      const body = {
        questionName: question,
        questionUrl: inputUrl
      }
      await axios.post('/questions',body,config).then((res)=>{
        console.log("eroor");
        console.log(res.data);
          alert(res.data.message)
          // window.location.href = '/home'
          navigate('/home')
      }).catch((e)=>{
        console.log(e);
        alert('Error in adding question')
      })
    }
  }

  const handleLogout = ()=>{
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className='qHeader'>
      <div className='qHeader-content'>
        <div className='qHeader__logo'>
          <img src={logo} alt="logo" />
          </div>
          <div className='qHeader__icons'>
          <div className='qHeader__icon'>
            <HomeIcon />
          </div>
          <div className='qHeader__icon'>
            <FeaturedPlayListOutlined />
          </div>
          <div className='qHeader__icon'>
            <AssessmentOutlined />
          </div>
          <div className='qHeader__icon'>
            <PeopleAltOutlined />
          </div>
          <div className='qHeader__icon'>
            <NotificationsOutlined />
          </div>
          </div>
              <div className='qHeader__input'>
                <Search />
                <input type="text" placeholder='Search questions' />
              </div>
              <div className='qHeader__Rem'>
                <Avatar />
              </div>
                  <Button onClick={()=> setIsModalOpen(true)} style={{backgroundColor:'#9b2222', color:"lightgrey" ,marginLeft:"8px"}}>Add Question</Button>
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
                    <div className='modal__title'>
                      <span className='modalspan'>Add Question</span> 
                      <span >Share Link</span>
                    </div>
                    <div className='modal__info'>
                      <Avatar className='avatar'/>
                      <div className='modal__scope'>
                        <PeopleAltOutlined />
                        <span>Public</span>
                        <ExpandMore />
                      </div>
                    </div>
                    <div className='modal__Field'>
                      <Input 
                      value={question}
                      onChange = {(e) => setQuestion(e.target.value)}
                       type='text'
                        placeholder="Start your question with 'What','How' ,'Why' ,etc.."/>
                      <div style={{
                        display:'flex',
                        flexDirection:'column',
                      
                      }}>
                        <input type="text" className='inputSize mt-5'
                        value={inputUrl}
                        onChange={(e) => setInputUrl(e.target.value)}
                        style={{
                         
                          margin: '5px 0',
                          border: '1px solid lightgray',
                          padding: '10px',
                          outline: '2px solid #000',
                        }}
                         placeholder='Optional: include a link that gives context'/>
                         {inputUrl !== '' && <img style={{
                          height:"40vh",
                          objectFit:"contain"
                         }} src={ inputUrl } alt="image" />}
                         
                      </div>
                    </div>
                    <div className='modal__buttons'>
                      <button className='cancle' onClick={()=> setIsModalOpen(false)}>
                        Cancel
                      </button>
                      <button onClick={handleSubmit}  type='submit' className='add' >
                        Add Question
                      </button>
                    </div>
                  </Modal>

                  <Button  onClick={handleLogout} style={{backgroundColor:'#9b2222', color:"lightgrey" ,marginLeft:"8px"}} >Logout</Button>
     </div>
    </div>
  )
}

export default Header
