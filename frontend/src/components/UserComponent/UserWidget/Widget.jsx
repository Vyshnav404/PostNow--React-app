import React from 'react'
import WidgetContent from './WidgetContent'
import './Widget.css'

function Widget() {
  return (
    <div style={{flex:'0.2'}} className='widget col-lg-4'>
      <div className='widget__header'>
        <h5>Space to follow</h5>
      </div>
      <div className='widget__contents'>
        <WidgetContent />
      </div>
    
    </div>
  )
}

export default Widget
