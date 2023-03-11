import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Qimg from "../Images/question.png";

const LeftSidebar = () => {

  const navigate = useNavigate()
  return (
    <>
     <button onClick={()=>navigate('/user/home')}
        className="btn text-muted list-group-item list-group-item-action my-1 mt-2"
      
        style={{ width:'50%',fontSize: "15px",height:"50px",border:'1px solid grey', background:'transparent',textAlign:'center',margin:'auto',display:'block'}}
      >
        <i className="fas fa-home mr-2"></i>Home
      </button>
      <button 
        onClick={()=>navigate('/user/userpost')}
        className=" btn text-muted list-group-item list-group-item-action my-1 mt-3"
        href="#list-item-1"
        style={{ width:'50%',fontSize: "15px",height:"50px",border:'1px solid grey', background:'transparent',textAlign:'center',margin:'auto',display:'block'}}
      >
        <i className="fas fa-users mr-2"></i> posts
      </button>
      <button
      onClick={()=>navigate('/user/home')}
        className=" btn text-muted list-group-item list-group-item-action my-1 mt-3"
        href="#list-item-1"
        style={{ width:'50%',fontSize: "15px",height:"50px",border:'1px solid grey', background:'transparent',textAlign:'center',margin:'auto',display:'block'}}
      >
        <i className="fas fa-globe-asia mr-2"></i> Questions
      </button>
      <button
     
        className=" btn text-muted list-group-item list-group-item-action my-1 mt-3"
        href="#list-item-1"
        style={{ width:'50%',fontSize: "15px",height:"50px",border:'1px solid grey', background:'transparent',textAlign:'center',margin:'auto',display:'block'}}
      >
        <i className="fas fa-hashtag mr-2"></i> Tags
      </button>
      <button
     
        className=" btn text-muted list-group-item list-group-item-action my-1 mt-3"
        href="#list-item-1"
        style={{ width:'50%',fontSize: "15px",height:"50px",border:'1px solid grey', background:'transparent',textAlign:'center',margin:'auto',display:'block'}}
      >
        <i className="fas fa-users-cog mr-2"></i> Users
      </button>

      
      <div className="card text-left m-0 p-0 mt-5">
        <div className="card-body">
          <p>
            <b>Post Now for Teams -</b>Collaborate and share knowledge with a
            private group.
          </p>
          <img src={Qimg} alt="IMG" width="120px" />
          <button className="btn btn-primary btn-sm my-2">
            <small> Create a free Team</small>
          </button>
          <Link className="text-muted text-center" to="/user">
            <small>What is Teams?</small>
          </Link>
        </div>
      </div>

    </>
  );
};

export default LeftSidebar;
