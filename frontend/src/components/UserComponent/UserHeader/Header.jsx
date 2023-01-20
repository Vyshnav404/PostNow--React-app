import React from 'react'
import  logo from '../../../assets/mylogo.png'
import HomeIcon from '@material-ui/icons/Home';
import {AssessmentOutlined, FeaturedPlayListOutlined, NotificationsOutlined, PeopleAltOutlined, Search} from '@material-ui/icons/'
import { Avatar, Button } from '@material-ui/core';

import './Header.css'

function Header() {
  return (
    <div className='qHeader'>
      <div className='qHeader-content'>
        <div className='qHeader__logo'>
          <img src={logo} alt="logo" />
          </div>
          <div className='qHeader__icons'>
          <div className='qHeader__icon'>
            <HomeIcon />
          </div>
          <div className='qHeader__icon'>
            <FeaturedPlayListOutlined />
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
                <Avatar />
              </div>
                  <Button>Add Question</Button>

       
     </div>
    </div>
  )
}

export default Header
