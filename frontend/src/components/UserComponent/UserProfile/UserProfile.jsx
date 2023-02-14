import React, { useState } from 'react'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import{ useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../redux/features/userSlice'
import axios from 'axios';
import { useEffect } from 'react';
import ProfileUpdate from './ProfileUpdate';
import ProfilePicAddModal from './ProfilePicAddModal';
import PostOnProfile from './PostOnProfile';
import QuestionOnProfile from './QuestionOnProfile';
import Button from 'react-bootstrap/esm/Button';

const UserProfile = () => {
  const { userDetails } = useSelector(state=> state.user);
  const { tokenData } = useSelector(state => state.user)
  const [useresponse , setResponse] = useState([])
  const [values , setValues] = useState(null)

  const dispatch = useDispatch()

  let post;
  const handlePost=()=>{
    setValues(post)
  }
 
  let questions;
  const handleQuestion =()=>{
    setValues(null)
  }

  let email = userDetails.email
  const getUser = async()=>{
    // await axios.get('/getUser/'+email).then((response)=>{
    //     setResponse(response.data)
    //     dispatch(setUser(response.data))
    // })
    const data = await axios({
      url:'/getUser/'+email,
      method:'get',
      headers:{
        Authorization:tokenData
      }
    })
    console.log("ddddddaaata",data)
    setResponse(data.data)
    dispatch(setUser(data.data))

  }

  useEffect(()=>{
    getUser()
  },[])

  // useEffect(async()=>{
  //   const data = await axios( {
  //     url:'/getUser/'+email,
  //     method:'get',
  //     headers:{
  //       Authorization:tokenData
  //     }
  //   })
  // })


 let defaultUrl = "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
  return (
    <div>
        <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
      

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
               
               <img src={useresponse.imageUrl ? useresponse?.imageUrl:defaultUrl} 
               alt="avatar"
                className='rounded-circle'
                style={{width:'150px'}} />

                <p className="text-muted mb-1">{userDetails.firstName+" "}{userDetails.lastName}</p>
                <p className="text-muted mb-4">{userDetails.job}</p>
                
                <div className="d-flex justify-content-center mb-2 ">
                  {/* <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn> */}
                  <ProfileUpdate  userData={userDetails}  /><ProfilePicAddModal />
                </div>

              </MDBCardBody>
            </MDBCard>

            {/* <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">

                <MDBListGroupItem className=" d-flex  align-items-center justify-content-center p-3">
                    <MDBIcon/>
                    <MDBCardText><h5 >Social medias</h5></MDBCardText>
                    
                    <button className="btn btn-primary mb-3 ms-5  " type="submit">add</button>
                
                    
                  </MDBListGroupItem>

                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                  
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard> */}
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>First Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userDetails.firstName}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Last Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userDetails.lastName} </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userDetails.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
               
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Profession</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userDetails.job}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Company</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userDetails.company}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            {/* <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow> */}
          </MDBCol>
        </MDBRow>

        <div className='d-flex' style={{justifyContent:'center'}}>
         <div style={{marginRight:"15px"}}>
            <Button onClick={handlePost}>Posts</Button>
          </div> 
         <div>
          <Button onClick={handleQuestion}>Questions</Button>
         </div>         
        </div>

        <div className='d-flex' style={{flexDirection:'column', alignItems:'center'}}>
          {
            values === post ? <PostOnProfile userData={userDetails}/> :  <QuestionOnProfile userData={userDetails}/> 
          } 

        </div>
      </MDBContainer>
    </section>
    </div>
  )
}

export default UserProfile





   
