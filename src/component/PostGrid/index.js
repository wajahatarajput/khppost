import React from "react";

const PostGrid = ( {children}) => {

  return (
    <>
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default PostGrid;