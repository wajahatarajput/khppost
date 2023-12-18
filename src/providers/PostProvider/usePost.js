import { useContext } from 'react'
import { PostContext } from './context'

export const usePost = () => {
    const {post, setPost, cookies, 
      replacePost, 
      removePost} = useContext(PostContext)
  return {
    post,
    setPost,
    cookies,
    replacePost, 
    removePost
  }
}

