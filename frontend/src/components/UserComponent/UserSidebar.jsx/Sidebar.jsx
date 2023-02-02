import React from 'react'
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';

function Sidebar() {
  return (
    <div style={{flex:'0.2'}} className='sidebar col-lg-3 col-sm-12'>
      <SidebarOptions />
    </div>
  )
}

export default Sidebar
