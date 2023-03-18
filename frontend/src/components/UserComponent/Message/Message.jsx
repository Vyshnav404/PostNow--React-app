import React from 'react'
import './Message.css'
import { format } from 'timeago.js'
import { useSelector } from 'react-redux'

function Message({ message,own }) {

  const { userDetails } = useSelector(state => state.user)
  const { friendData } = useSelector(state => state.friend)
  const defaultUrl  = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuwx_12h-gPqQwQh9DEKsKHSjJ4nfWFsJtRDwjycGsSA&usqp=CAU&ec=48600113"
  return (
    <div className={own ? 'message own' : "message"}>
     
      <div className='messageTop'>
        <img
        className='messageImg'
         src={own && userDetails?.imageUrl ? userDetails.imageUrl : friendData?.imageUrl }
         alt="" />
        <p className='messageText'>{message.text}</p>
      </div>
      <div className='messageBottom'>{format(message.createdAt)}</div>
    </div>
  )
}

export default Message
