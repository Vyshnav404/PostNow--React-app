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

function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl,setInputUrl] = useState('')
  const Close = (<CloseIcon />)

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
                      <Input  type='text' placeholder="Start your question with 'What','How' ,'Why' ,etc.."/>
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
                      <button  type='submit' className='add' >
                        Add Question
                      </button>
                    </div>
                  </Modal>

       
     </div>
    </div>
  )
}

export default Header
