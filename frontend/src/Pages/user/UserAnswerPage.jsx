import React from 'react'
import '../css/userHome.css'
import AnswerComponent from '../../components/UserComponent/UserAnswer/AnswerComponent'
import Header from '../../components/UserComponent/UserHeader/Header'
import Sidebar from '../../components/UserComponent/UserSidebar.jsx/Sidebar'
import Widget from '../../components/UserComponent/UserWidget/Widget'

function UserAnswerPage() {
  return (
    <div className='userHome'>
      <Header />
      <div className='home__contents container-fluid'>
        {/* <div className='home__content row'> */}
      <Sidebar />
      <AnswerComponent />
      <Widget />
        {/* </div> */}
      </div>
    </div>
  )
}

export default UserAnswerPage
