<<<<<<< HEAD
import React, { useCallback, useEffect, useState } from 'react'
import { PostProviderContext } from './context';

const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const replacePost = useCallback((posts) => {
        setPosts([]);
        setPosts(prev => [...prev, ...posts])
    }, []);

    const updatePost = useCallback((post) => {
        setPosts(prev => [...prev, post])
    }, []);

    useEffect(() => {

        return (() => {
            console.log('Reload')
            setPosts([]);
        })
    }, [])

    return (
        <PostProviderContext.Provider value={{ posts, replacePost, updatePost }}>
            {children}
        </PostProviderContext.Provider>
    )
}

export default PostProvider;
=======
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
>>>>>>> cbde9b0fcc174dc7e70a9f92bbc11d4fad15df2c
