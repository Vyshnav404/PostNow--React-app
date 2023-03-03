import React from "react";
import PostnowBox from "./PostnowBox";
import "./Feed.css";
import Post from "./Post";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllQuestion,
  setSearchAllQuestion,
} from "../../../redux/features/allQuestionSlice";

function Feed() {
  const [posts, setPost] = useState([]);
  const { tokenData } = useSelector((state) => state.user);
  const { allQuestion } = useSelector((state) => state.allQuestion);
  const { searchAllQuestion } = useSelector((state) => state.allQuestion);
  const dispatch = useDispatch();





  useEffect(() => {
    axios
      .get("/Allquestions", {
        headers: {
          Authorization: tokenData,
        },
      })
      .then((res) => {
        setPost(res.data);
        dispatch(setAllQuestion(res.data.reverse()));
        dispatch(setSearchAllQuestion(allQuestion));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="feed col-lg-5 col-sm-12">
      <PostnowBox />
      {searchAllQuestion.map((allQuestion, index) => (
        <Post key={index} post={allQuestion} />
      ))}
    </div>
  );
}

export default Feed;
