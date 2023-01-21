import React from 'react'
import './Userlogin.css'
import axios from 'axios'
import { useState } from 'react'

function Userlogin() {

  const [isUserLoggedIn,setIsUserLoggedIn] = useState(false)
    const [data,setData] = useState({
      email:'',
      password:''
    })

    const [error,setError]=useState('');

    const handleChange = ({currentTarget:input})=>{
      setData({...data,[input.name]:input.value});
    };

    const handleSubmit = async(e)=>{
      e.preventDefault();
      try {
        // const url = "http://localhost:8080/login";
        axios.defaults.baseURL = 'http://localhost:8080'
        const { data: res } = await axios.post('/login', data);
        localStorage.setItem("token", res.data);
        setIsUserLoggedIn(true);
        
        window.location = "/home";

        
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    }

  return (
    <>
    <div className='loginbody'>
      <div className="form">
            <h2>Login</h2>
            <form className="input"  onSubmit={handleSubmit}>
                <div className="inputBox">
                    <label for="">Email</label>
                    <input name='email' onChange={handleChange} value={data.email} required type="email"/>
                </div>
                <div className="inputBox">
                    <label for="">Password</label>
                    <input name='password' onChange={handleChange} value={data.password} required type="password"/>
                </div>
                <div className="inputBox">
                    <input type="submit" name="" value="Sign In"/> 
                </div>
            </form>
            <p className="forgot">Not a member ? <a href="#">Sign up now</a></p>
            
        </div>
        </div>
        
    </>
  )
}

export default Userlogin
