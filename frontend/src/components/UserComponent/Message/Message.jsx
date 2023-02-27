import React from 'react'
import './Message.css'
import { format } from 'timeago.js'

function Message({ message,own }) {
  return (
    <div className={own ? 'message own' : "message"}>
      <div className='messageTop'>
        <img
        className='messageImg'
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuwx_12h-gPqQwQh9DEKsKHSjJ4nfWFsJtRDwjycGsSA&usqp=CAU&ec=48600113"
         alt="" />
         <p className='messageText'>{message.text}</p>
      </div>
      <div className='messageBottom'>{format(message.createdAt)}</div>
    </div>
  )
}

export default Message
