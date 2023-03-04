import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { Modal } from 'react-responsive-modal'
import Button from 'react-bootstrap//Button';
import CloseIcon from '@material-ui/icons/Close'
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast,{ Toaster } from 'react-hot-toast'

function AddPhotoPost() {
 
    const { userDetails,tokenData } = useSelector(state => state.user)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [image, setImage] = useState('')
    const [caption, setCaption] = useState('')
    const Close = (<CloseIcon />)
    console.log("immage data",image);

    const handleQuill = (value)=>{
        setCaption(value)
    }
    let Allowed_File_Types  = ["image/jpeg","image/jpg","image/png","image/webp","image/gif" ]

    const handleSubmit = async()=>{
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
                 if(data.url){
                    
                    const config = {
                        headers:{
                            "Content-Type":"application/json"
                        }
                    }

                    const body = {
                        postUrl:data.url,
                        caption:caption,
                        user:userDetails
                    }

                    await axios.post('/addPost',body,{
                      headers:{
                        Authorization:tokenData
                      },
                      config,
                    }).then((res)=>{
                        toast.success("Post Added Successfully")
                        // >>>>>>>> Add balance after Post page complete <<<<<<<<
                    })
                }
            })
        }
        setIsModalOpen(false)
    }


const handleShow = ()=> setIsModalOpen(true)
  return (
    <div>
        <div style={{textAlign:"center"}}>
        <Button style={{background:"rgb(155, 34, 34)",border:"none"}} onClick={handleShow} >
        Add Post
        </Button>
        </div>
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
              <h1>Create a Post</h1>
              {/* <p>asked by {" "}<span className='name'>Username</span>{" "}on{" "}
              <span className='name'>{new Date(questionDetails?.createdAt).toLocaleString()}</span></p> */}
            </div>
            <div>
                <input type="file"  name="image" onChange={(e)=> setImage(e.target.files[0])}/>
            </div>
            <div style={{textAlign:"center"}}>
          {image &&  <img src={URL.createObjectURL(image)} alt="image" style={{width:'50%',}} /> }
          </div>
            <div className='modal__answer'>
              <ReactQuill value={caption} onChange={handleQuill} placeholder='Enter your answer' />
            </div>
            <div className='modal__button'>
                        <button className='cancle' onClick={()=> setIsModalOpen(false)}>
                          Cancel
                        </button>
                        <button  onClick={handleSubmit} type='submit' className='add' >
                          Add Post
                        </button>
                      </div>
         
          </Modal>

      <Toaster />
    </div>
  )
}

export default AddPhotoPost
