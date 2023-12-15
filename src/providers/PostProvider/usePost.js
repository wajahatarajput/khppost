import { useContext } from 'react'
import { ContextPost } from './contextPost'

export const usePost = () => {
    const { composePost, setPost, replacePost  } = useContext(ContextPost);
    return {
      composePost, setPost, replacePost
  }
}
