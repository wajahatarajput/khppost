import React, { useEffect } from 'react'
import { PostCard, PostGrid } from '../../component';
import { usePosts } from '../../hooks/usePosts';
import { usePost } from '../../providers';

const BrowsePostsFeature = () => {

  const { getData, handleDelete } = usePosts();
  const {post} = usePost()

  useEffect(() => {
    getData();
  }, [getData])

  return (
    <PostGrid>
      {
        post?.map((post) => {
          return <PostCard post={post} handleDelete={handleDelete} />
        })
      }
    </PostGrid>
  )
}

export default BrowsePostsFeature;