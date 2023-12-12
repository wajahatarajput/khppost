import React, { useEffect } from 'react'
import { PostCard, PostGrid } from '../../component';
import { usePosts } from '../../hooks/usePosts';

const BrowsePostsFeature = () => {

  const { data, getData, handleDelete } = usePosts()

  useEffect(() => {
    getData();
  }, [getData])

  return (
    <PostGrid>
      {
        data?.map((post) => {
          return <PostCard post={post} handleDelete={handleDelete} />
        })
      }
    </PostGrid>
  )
}

export default BrowsePostsFeature;