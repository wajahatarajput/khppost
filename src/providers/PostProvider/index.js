import React, { useCallback, useEffect, useState } from 'react'
import { PostProviderContext } from './context';

const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const replacePost = useCallback((posts) => {
        setPosts([]);
        setPosts(prev => [...prev, ...posts])
    }, []);

    const updatePost = useCallback((post) => {
        setPosts(prev => [...prev, post])
    }, []);

    useEffect(() => {

        return (() => {
            console.log('Reload')
            setPosts([]);
        })
    }, [])

    return (
        <PostProviderContext.Provider value={{ posts, replacePost, updatePost }}>
            {children}
        </PostProviderContext.Provider>
    )
}

export default PostProvider;
