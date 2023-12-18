import React, { useEffect } from 'react'
import { PostCard, PostGrid } from '../../component';
import { usePosts } from '../../hooks/usePosts';
import { usePostProvider } from '../../providers';

const BrowsePostsFeature = () => {

  const { getData, handleDelete } = usePosts();
  const { posts } = usePostProvider();

  useEffect(() => {
    getData();
  }, [getData])

  return (
    <PostGrid>
      {
        posts?.map((post) => {
          return <PostCard post={post} handleDelete={handleDelete} />
        })
      }
    </PostGrid>
  )
}

export default BrowsePostsFeature;