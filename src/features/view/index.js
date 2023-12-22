import React from 'react'
import { PostCard } from '../../component';
import { useLocation } from 'react-router-dom';
import { usePosts } from '../../hooks/usePosts';

const ViewPostFeature = () => {
    const location = useLocation();
    const { post, isViewPage } = location.state || {};
    const { handleDelete } = usePosts();

    return (
        <PostCard post={post} isViewPage={isViewPage} handleDelete={handleDelete} index={1} />
    )
}

export default ViewPostFeature;
