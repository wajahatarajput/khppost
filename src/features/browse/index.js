import React, { useEffect } from 'react'
import { PostCard, PostGrid } from '../../component';
import { usePosts } from '../../hooks/usePosts';
import { usePost } from '../../providers';

const BrowsePostsFeature = () => {

  const { data, getData, handleDelete } = usePosts();
  const { composePost } = usePost();

  useEffect(() => {
    getData();
  }, [getData])

  console.log(composePost)

  return (
    <PostGrid>
      {
        composePost?.map((post) => {
          return <PostCard post={post} handleDelete={handleDelete} />
        })
      }
    </PostGrid>
  )
}

export default BrowsePostsFeature;