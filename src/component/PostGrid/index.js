import React, { useCallback, useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";

const PostGrid = () => {
  const [getdata, setgetdata] = useState([]);

  const GetDataApi = useCallback(async() => {
    await axios.get("http://localhost:3180/getpostdata").then((res) => {
      setgetdata(res?.data)
    })
  },[])
  useEffect(() => {
    GetDataApi();
  },[])
  return (
    <>
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          {
            getdata.map((postPara) => {
              return <PostCard postPara={postPara} />;
            })
         } 
        </div>
      </div>
    </>
  );
};

export default PostGrid;
