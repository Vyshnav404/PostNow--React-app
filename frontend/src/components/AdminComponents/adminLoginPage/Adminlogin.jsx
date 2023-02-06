import React from "react";
import "./AdminLogin.css";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showloading,hideloading } from "../../../redux/features/alertSlice";
import toast,{ Toaster } from 'react-hot-toast'

function Adminlogin() {

  
  const [isAdminLoggedIn,setIsAdminLoggedIn]= useState(false)
  const [data,setData] = useState({
    userName:'',
    password:'',
  })

  const dispatch = useDispatch()

  const handleChange = ({currentTarget : input})=>{
    setData({...data,[input.name]:input.value});
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
    
      // axios.defaults.baseURL = 'http://localhost:8000'
      dispatch(showloading())
       const { data:res } = await axios.post('/admin/adminLogin',data);
        dispatch(hideloading())
       localStorage.setItem("Admintoken",res.data);
       setIsAdminLoggedIn(true);
       window.location = "/admindashboard"
    } catch (error) {
      // console.log(error);
      if(error.response &&
        error.response.status >= 400 &&
        error.response.status <500){
          toast.error("Invalid Password or Admin Name")
        }
    }
  }

  return (
    <>
      <div className="adminlogin">
        <form className="box" action=""  target="_self" onSubmit={handleSubmit}>
          <h1>login</h1>
          <input
            type="text"
            name="userName"
            id="username"
            value={data.userName}
            onChange={handleChange}
            placeholder="Username"
           
          />
          <input
            type="password"
            name="password"
            id="pass"
            value={data.password}
            onChange={handleChange}
            placeholder="Password"
           
          />
          <input type="submit" id="submit" value="login" />
        </form>
      </div>
      <Toaster/>
    </>
  );
}

export default Adminlogin;
