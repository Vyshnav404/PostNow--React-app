import React from "react"
import { Routes,Route } from "react-router-dom"
import AdminLogin from "./Pages/admin/AdminLogin"
import UserLogin from "./Pages/user/UserLogin"
import UserSignup from "./Pages/user/UserSignup"
import UserHome from "./Pages/user/UserHome"
import AdminDashboard from "./Pages/admin/AdminDashboard"

function App() {

  return (
    <div>
     <Routes>
      <Route exact path="/admin" element={<AdminLogin />}></Route>
      <Route exact path="/admindashboard" element={<AdminDashboard />}></Route>
      <Route exact path="/" element={<UserLogin />}></Route>
      <Route exact path="/signup" element={<UserSignup />}></Route>
      <Route exact path="/home" element={<UserHome />}></Route>
      
     </Routes>
      
    </div>
  )
}

export default App
