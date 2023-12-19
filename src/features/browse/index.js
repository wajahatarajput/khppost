import React, { useEffect } from 'react'
import { PostCard, PostGrid } from '../../component';
import { usePosts } from '../../hooks/usePosts';
<<<<<<< HEAD
import { usePostProvider } from '../../providers';
=======
import { usePost } from '../../providers';
>>>>>>> cbde9b0fcc174dc7e70a9f92bbc11d4fad15df2c

const BrowsePostsFeature = () => {

  const { getData, handleDelete } = usePosts();
<<<<<<< HEAD
  const { posts } = usePostProvider();
=======
  const {post} = usePost()
>>>>>>> cbde9b0fcc174dc7e70a9f92bbc11d4fad15df2c

  useEffect(() => {
    getData();
  }, [getData])

  return (
    <PostGrid>
      {
<<<<<<< HEAD
        posts?.map((post) => {
=======
        post?.map((post) => {
>>>>>>> cbde9b0fcc174dc7e70a9f92bbc11d4fad15df2c
          return <PostCard post={post} handleDelete={handleDelete} />
        })
      }
    </PostGrid>
  )
}

export default BrowsePostsFeature;