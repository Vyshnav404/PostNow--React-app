import React from 'react'
import Feed from '../../components/UserComponent/UserFeed/Feed'
import Header from '../../components/UserComponent/UserHeader/Header'
import Sidebar from '../../components/UserComponent/UserSidebar.jsx/Sidebar'
import Widget from '../../components/UserComponent/UserWidget/Widget'
import '../css/userHome.css'

function UserHome() {
  return (
    <div className='userHome'>
        <Header />
        <div className='home__contents container-fluid'>
          <div className='home__content row' >
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
    </div>
  )
}

export default UserHome
