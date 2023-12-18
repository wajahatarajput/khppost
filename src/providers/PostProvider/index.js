import React, { useCallback, useState } from 'react'
import { PostContext } from './context'
import Cookies from 'universal-cookie'

const PostProvider = ({ children }) => {
  const cookies = new Cookies(null, { path: '' })
  const [post, setPost] = useState([])

  const replacePost = useCallback((posts) => {

    setPost(prev => [...prev, posts])
  }, []);
  const updatePost = useCallback((posts) => {

    setPost(prev => [...prev, posts])
  }, []);

  const removePost = useCallback((id) => {
    setPost(posts => posts.filter(post => post._id !== id));
  }, []);

  return (
    <PostContext.Provider value={{ post, setPost, cookies, replacePost, updatePost, removePost }}>
      {children}

    </PostContext.Provider>
  )
}

export default PostProvider
