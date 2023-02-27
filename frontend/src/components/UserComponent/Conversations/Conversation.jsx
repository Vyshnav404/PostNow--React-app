import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getUser } from '../../../helpers/UsersChatHelper';
import './Conversation.css'

function Conversation({conversation, currentUser}) {
const [user, setUser] = useState(null);
const { tokenData } = useSelector(state => state.user)

useEffect(()=>{
const friendId = conversation.members.find((m)=>m !== currentUser._id);

try {
  (async()=>{
    const data = await getUser(friendId,tokenData)
    setUser(data)
  })();
} catch (error) {
  console.log("ivde eroor",error);
}
},[currentUser,conversation])


  return (
    <div className='conversation'>
      <img
      className='conversationImg'
      src={user?.imageUrl}
       alt="" />
       <span  className='conversationName'>{user?.firstName}</span>
    </div>
  )
}

export default Conversation
