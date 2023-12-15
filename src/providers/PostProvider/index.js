import React, {useCallback, useState } from "react";
import { ContextPost } from "./contextPost";

const PostProvider = ({ children }) => {
  const [composePost, setPost] = useState([]);

  const replacePost = useCallback((newPost) => {
    setPost(prev => [...prev, ...newPost ]);
  }, []);

  const removePost = useCallback(() => { }, [])
  
  return (
    <ContextPost.Provider value={{ composePost, setPost, replacePost }}>
      {children}
    </ContextPost.Provider>
  );
};

export default PostProvider;
