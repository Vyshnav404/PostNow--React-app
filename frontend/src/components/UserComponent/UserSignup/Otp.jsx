import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast,{Toaster} from 'react-hot-toast'
import axios from "axios";

function Otp() {

  const [otp , setOtp] = useState('');
  const navigate = useNavigate()

  const { userDetails } = useSelector((state) => state.user);
  console.log("otp comming", userDetails);
  const mail = userDetails.data.email;
  console.log(mail,"uuuuuuseeer iiiid");

  const handleChange = (e)=>{
    setOtp(e.target.value)
  }

  let verifyOTP = userDetails.data.OTP
  console.log(verifyOTP);

  const handleOTP =()=>{
    if(verifyOTP === otp){
      axios.post('/otpVerify',{mail:mail}).then((res)=>{
      })
      // alert('correct')
      toast.success('otp verified')
      navigate('/')
    }else{
      // alert("wrong")
      toast.error("otp wrong")
      
      
    }

  }

  return (
    <>
      <div className="loginbody">
        <div className="form">
          <h2>OTP verification</h2>
          <div className="input" >
            <div className="inputBox">
              <input name="otp"  value={otp} onChange={handleChange} required type="number" />
            </div>

            <div className="inputBox">
              <input  onClick={handleOTP} type="submit" name="" value="OK" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp;
