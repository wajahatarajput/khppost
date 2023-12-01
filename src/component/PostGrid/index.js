import React from "react";
import PostCard from "../PostCard";

const PostGrid = () => {
  return (
    <>
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <PostCard/>
        </div>
      </div>
    </>
  );
};

export default PostGrid;
