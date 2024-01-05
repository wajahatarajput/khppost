import React, { useEffect, useMemo } from 'react';
import { PostCard, PostGrid } from '../../component';
import { usePosts } from '../../hooks/usePosts';
import { usePostProvider } from '../../providers';

const BrowsePostsFeature = () => {
  const { getData, handleDelete } = usePosts();
  const { posts } = usePostProvider();

  useEffect(() => {
    getData();
  }, [getData]);

  const memoizedPostCards = useMemo(() => {
    return (
      posts?.map((post, index) => (
        <PostCard key={index} post={post} handleDelete={handleDelete} index={index} />
      )) || <p>No posts found</p>
    );
  }, [posts, handleDelete]);

  return <PostGrid>{memoizedPostCards}</PostGrid>;
};

export default BrowsePostsFeature;
