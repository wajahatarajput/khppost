import React, { useCallback, useState } from "react";
import PostCard from "../PostCard";
import { useEffect } from "react";
import axios from "axios";

const PostGrid = () => {

  const [postData,setPostData] = useState([]);

  const getPostData = useCallback(async ()=>{
    await axios.get('http://localhost:3180/getpostdata').then(res=>{
      setPostData(res.data)
    })
  },[])

  useEffect(()=>{
    getPostData();
  },[])

  return (
    <>
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
         {
          postData.map((post)=>{
            return (
                <PostCard post={post}/>
            )
          })
         }
        </div>
      </div>
    </>
  );
};

export default PostGrid;
