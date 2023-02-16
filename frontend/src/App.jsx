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
import UserManagePage from "./Pages/admin/UserManagePage"
import UserProfilePage from "./Pages/user/UserProfilePage"
import UserAnswerPage from "./Pages/user/UserAnswerPage"
import AdminProtectedRoute from "./components/AdminProtect/AdminProtectedRoute"
import AdminPublicRoute from "./components/AdminProtect/AdminPublicRoute"
import AdminQuestionPage from "./Pages/admin/AdminQuestionPage"
import UserPostPage from "./Pages/user/UserPostPage"
import OthersProfilePage from "./Pages/user/OthersProfilePage"

function App() {

  // const { loading } = useSelector((state)=>state.alerts);

  return (
    <div>
      {/* { loading ?(<Spinner />):( */}
         <Routes>
         <Route exact path="/admin" element={ <AdminPublicRoute> <AdminLogin /> </AdminPublicRoute> }></Route>
         <Route exact path="/admindashboard" element={<AdminProtectedRoute> <AdminDashboard /> </AdminProtectedRoute>}></Route>
         <Route exact path="/userdetails" element={ <AdminProtectedRoute> <UserManagePage /> </AdminProtectedRoute>}></Route>
         <Route exact path="/reportQuestion" element={ <AdminProtectedRoute> <AdminQuestionPage /> </AdminProtectedRoute>}></Route>

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


        <Route 
         exact path="/profile" 
         element={
          <ProtectedRouted>
         <UserProfilePage />
         </ProtectedRouted>
         }></Route>

        <Route 
         exact path="/answerpage" 
         element={
          <ProtectedRouted>
         <UserAnswerPage />
         </ProtectedRouted>
         }></Route>


        <Route 
         exact path="/userpost" 
         element={
          <ProtectedRouted>
         <UserPostPage />
         </ProtectedRouted>
         }></Route>


        <Route 
         exact path="/othersprofile" 
         element={
          <ProtectedRouted>
         <OthersProfilePage />
         </ProtectedRouted>
         }></Route>

         <Route exact path="/otp-page" element={<UserOtp />}></Route>
         
        </Routes>
       {/* ) }  */}
    
      
    </div>
  )
}

export default App
