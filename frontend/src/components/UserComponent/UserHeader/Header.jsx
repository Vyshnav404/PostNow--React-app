import React from 'react'
import  logo from '../../../assets/mylogo.png'
import HomeIcon from '@material-ui/icons/Home';
import {AssessmentOutlined, Close, ExpandMore, FeaturedPlayListOutlined, NotificationsOutlined, PeopleAltOutlined, Search, Style} from '@material-ui/icons/'
import { Avatar, Button, Input } from '@material-ui/core';
import { Modal } from 'react-responsive-modal'
import CloseIcon from '@material-ui/icons/Close';
import './Header.css'
import { useState } from 'react';
import 'react-responsive-modal/styles.css'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
  const { userDetails }= useSelector(state=>state.user)
  console.log(userDetails,"come on daa");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl,setInputUrl] = useState('')
  const [question, setQuestion] = useState('')
  const [image, setImage ] = useState('')
  const Close = (<CloseIcon />)
  const navigate = useNavigate()
 
  let Allowed_File_Types = ["image/jpeg","image/jpg","image/png","image/webp","image/gif" ]

  

  const handleSubmit = async()=>{
    if(question !== ""){
      if(Allowed_File_Types.includes(image.type)){
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","imagetesting")
        data.append("cloud_name","dv5vyqpjh")

        await fetch('https://api.cloudinary.com/v1_1/dv5vyqpjh/image/upload',{
          method:"post",
          body:data
        }).then((res)=>res.json())
        .then(async(data)=>{
          // setInputUrl(data.url);
          if(data.url){
          
          const config = {
            headers:{
              "Content-Type":"application/json",
            
    
            }
          }
    
          const body = {
            questionName: question,
            questionUrl: data.url,
            user:userDetails
          }
          await axios.post('/questions',body,config).then((res)=>{
            console.log("eroor");
            console.log(res.data);
              alert(res.data.message)
              navigate('/')
          }).catch((e)=>{
            console.log(e);
            alert('Error in adding question')
          }) 
        }
        })
      }else{
        const config = {
          headers:{
            "Content-Type":"application/json",
          
  
          }
        }
  
        const body = {
          questionName: question,
          questionUrl: inputUrl,
          user:userDetails
        }
        await axios.post('/questions',body,config).then((res)=>{
          console.log("eroor");
          console.log(res.data);
            alert(res.data.message)
            navigate('/')
        }).catch((e)=>{
          console.log(e);
          alert('Error in adding question')
        }) 
      }
      

     
    } ///
  }

  const handleLogout = ()=>{
    localStorage.removeItem('token')
    navigate('/')
  }

  let defaultUrl = "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"

  return (
    <div className='qHeader'>
      <div className='qHeader-content'>
        <div className='qHeader__logo'>
          <img src={logo} alt="logo" />
          </div>
          <div className='qHeader__icons'>
          <div className='qHeader__icon'>
           <Link className='qHeader__icon' to='/home'>< HomeIcon /></Link> 
          </div>
          <div className='qHeader__icon'>
          <Link className='qHeader__icon' to='/userpost'><FeaturedPlayListOutlined /></Link>  
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
               <Link to='/profile' >
                <img  src={userDetails.imageUrl ? userDetails?.imageUrl: defaultUrl } 
                alt="avatar"
                className='rounded-circle'
                style={{width:'50px',height:'35px'}} />
                </Link>
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
                        <input type="file" className='inputSize mt-5'
                        // value={inputUrl}
                        onChange={(e) => setImage(e.target.files[0])}
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
