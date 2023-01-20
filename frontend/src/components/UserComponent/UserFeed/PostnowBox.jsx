import React from 'react'
import { Avatar } from '@material-ui/core'
import './PostnowBox.css';

function PostnowBox() {
  return (
    <div className='postnowBox'>
      <div className='postnowBox__info'>
        <Avatar />
      </div>
      <div className='postnowBox__post'>
        <h5>What is your question or link ?</h5>
        </div>
    </div>
  )
}

export default PostnowBox
