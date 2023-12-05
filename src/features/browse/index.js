import React, { useEffect } from 'react'
import { PostCard, PostGrid } from '../../component';
import { POST_DATA } from '../../data/PostsData';

const BrowsePostsFeature = () => {

  useEffect(() => {
    //api call
  },[])

  return (
    <PostGrid>
      {
        POST_DATA.map((post) => {
          return <PostCard post={post}/>
        })
      }
    </PostGrid>
  )
}

export default BrowsePostsFeature;