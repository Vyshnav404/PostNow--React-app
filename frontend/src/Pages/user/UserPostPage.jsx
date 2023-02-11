import React from 'react';
import '../css/userHome.css'
import PhotoPostComponent from '../../components/UserComponent/UserPhotoPost/PhotoPostComponent';
import Header from '../../components/UserComponent/UserHeader/Header';
import Widget from '../../components/UserComponent/UserWidget/Widget';
import Sidebar from '../../components/UserComponent/UserSidebar.jsx/Sidebar';

function UserPostPage() {
  return (
    <div className='userHome'>
      <Header />
      <div className='home__contents container-fluid' >
      <Sidebar />
      <PhotoPostComponent />
      <Widget />
      </div>
    </div>
  )
}

export default UserPostPage
