import React from "react"
import { Routes,Route } from "react-router-dom"
import AdminLogin from "./Pages/admin/AdminLogin"
import UserLogin from "./Pages/user/UserLogin"
import UserSignup from "./Pages/user/UserSignup"
import UserHome from "./Pages/user/UserHome"
import AdminDashboard from "./Pages/admin/AdminDashboard"
import { useSelector } from "react-redux"
import Spinner from "./components/AdminComponents/Spinner"
import ProtectedRouted from "./components/Protect/ProtectedRouted"
import PublicRoute from "./components/Protect/PublicRoute"
import UserOtp from "./Pages/user/UserOtp"

function App() {

  const { loading } = useSelector((state)=>state.alerts);

  return (
    <div>
      { loading ?(<Spinner />):(
         <Routes>
         <Route exact path="/admin" element={<AdminLogin />}></Route>
         <Route exact path="/admindashboard" element={<AdminDashboard />}></Route>


         <Route 
         exact path="/" 
         element={
          <PublicRoute>
         <UserLogin />
         </PublicRoute>
         }></Route>

         <Route 
         exact path="/signup" 
         element={
          <PublicRoute>
         <UserSignup />
         </PublicRoute>
         }></Route>

         <Route 
         exact path="/home" 
         element={
          <ProtectedRouted>
         <UserHome />
         </ProtectedRouted>
         }></Route>


         <Route exact path="/otp-page" element={<UserOtp />}></Route>
         
        </Routes>
      ) }
    
      
    </div>
  )
}

export default App
