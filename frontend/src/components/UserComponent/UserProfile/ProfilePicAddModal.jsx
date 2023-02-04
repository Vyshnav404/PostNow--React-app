import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';

function ProfilePicAddModal() {
  
  const { userDetails } = useSelector(state => state.user)
  const id = userDetails._id
  const [show, setShow] = useState(false);
  const [ image,setImage] = useState('')
  const [ url, setUrl ] = useState('')

  const handleSubmit = async()=>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","imagetesting")
    data.append("cloud_name",'dv5vyqpjh') 
    
    await fetch('https://api.cloudinary.com/v1_1/dv5vyqpjh/image/upload',{
      method:"post",
      body:data
    }).then((res)=>res.json())
    .then((data)=>{
      console.log("image",data.url);
      setUrl(data.url) 
    })
    console.log("url===========",url);
    await axios.put('/profilePicture/'+id,{url:url}).then((res)=>{

   })
   
    .catch((err)=>{
      console.log(err);
    })
  }



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='ms-2'>
      <Button variant="primary" onClick={handleShow}>
        Add Profile Pic
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        {/* <form  onSubmit={handleSubmit}> */}
        <input type="file" name="image" onChange={(e)=> setImage(e.target.files[0])} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button onClick={handleSubmit}  type="submit" variant="primary"  >
          Save Changes
        </button>
        </Modal.Footer>
        {/* </form> */}
      </Modal>
    </div>
  );
}

export default ProfilePicAddModal
