import React, { useEffect, useRef, useState } from 'react'
import ChatOnline from '../ChatOnline/ChatOnline'
import Conversation from '../Conversations/Conversation'
import Message from '../Message/Message'
import './Messenger.css'
import { useSelector } from "react-redux"
import axios from 'axios'
import {io} from "socket.io-client"
import SearchBar from './SearchBar'

function Messenger() {
 const { userDetails } = useSelector((state) => state.user)
 const [conversations, setConversations] = useState([]);
 const [currentChat, setCurrentChat] = useState(null);
 const [messages, setMessages] = useState([]);
 const [newMessages, setNewMessages] = useState("");
 const [arrivalMessages, setArrivalMessages] = useState(null);
 const socket = useRef()
 const scrollRef = useRef();


useEffect(()=>{
socket.current = io("ws://localhost:8090");
socket.current.on('getMessage',data =>{
  setArrivalMessages({
    sender: data.senderId,
    text: data.text,
    createdAt: Date.now(),
  })
})
},[])


useEffect(()=>{
  arrivalMessages && 
  currentChat?.members.includes(arrivalMessages.sender) && 
  setMessages((prev)=> [...prev,arrivalMessages])
},[arrivalMessages,currentChat]);


 useEffect(()=>{
  socket.current.emit("addUser",userDetails._id);
  socket.current.on("getUsers",users=>{
    console.log(users);
  })
 },[userDetails])

 useEffect(()=>{
  const getConversations = async ()=>{
    try {
      const res = await axios.get('/conversation/'+userDetails._id);
      setConversations(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  getConversations();
 },[userDetails._id])


useEffect(()=>{
  const getMessages = async()=>{
    try {
      const res = await axios.get('/message/'+ currentChat?._id);
      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  getMessages()
},[currentChat])


const handleSubmit = async(e) =>{
  e.preventDefault();
  const message = {
    sender:userDetails._id,
    text: newMessages,
    conversationId:currentChat._id,
  }
  
  const receiverId = currentChat.members.find(member=> member !==userDetails._id)

  socket.current.emit("sendMessage",{
    senderId:userDetails._id,
    receiverId,
    text:newMessages
  })

  try {
    const res = await axios.post('/message',message)
    setMessages([...messages,res.data])
    setNewMessages('')
  } catch (error) {
    console.log(error);
  }
}



useEffect(()=>{
  scrollRef.current?.scrollIntoView({behavior: "smooth"});
},[messages]);


  return (
    <div className='messenger'>
      <div className='chatMenu'>
      <div className='chatMenuWrapper'>
        <SearchBar />
        <div className='card-scroll'
        style={{height:"407px",overflowY:'scroll'}}>
       
        {
          conversations.map((c)=>(

            <div onClick={()=>setCurrentChat(c)} >
            <Conversation conversation={c} currentUser={userDetails}/>
            </div>
          ))
        }
         </div>
      </div>
      </div>

      <div className='chatBox'>
      <div className='chatBoxWrapper'>
        {
          currentChat ?
        <>
        <div className='chatBoxTop'>
          {
            messages.map((m)=>(
              <div ref={scrollRef}>
              <Message  message={m} own={m.sender === userDetails?._id}/>
              </div>
            ))
          }
      
        </div>
        <div className='chatBoxBottom'>
          <textarea className='chatMessageInput' placeholder='Write something....'
          onChange={(e) => setNewMessages(e.target.value)} value={newMessages}/>
          <button className='chatSubmitButton' onClick={handleSubmit}>Send</button>
        </div></> : <span className='noConversationText' >
          Open a conversation to start a chat.</span>}
      </div>
      </div>

      <div className='chatOnLine'>
        <div className='chatOnLineWrapper'>
          {/* <ChatOnline /> */}
        </div>
      </div>

    </div>
  )
}

export default Messenger
