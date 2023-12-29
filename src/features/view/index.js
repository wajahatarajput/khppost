import React, { useCallback, useEffect, useState } from 'react'
import { PostCard } from '../../component';
import { useLocation } from 'react-router-dom';
import { usePosts } from '../../hooks/usePosts';

const ViewPostFeature = () => {
    const location = useLocation();
    const { post, isViewPage } = location.state || {};
    const [currentPost, setCurrentPost] = useState();
    const { handleDelete, getDataById } = usePosts();

    const loadPost = useCallback(async () => {
        const data = await getDataById(post?._id);
        setCurrentPost(data);
    }, [post, getDataById])

    useEffect(() => {
        loadPost();
    }, [loadPost]);

    if (currentPost)
        return (
            <PostCard post={currentPost} isViewPage={isViewPage} handleDelete={handleDelete} index={1} />
        )
    else
        return <>Loading</>
}

export default ViewPostFeature;
