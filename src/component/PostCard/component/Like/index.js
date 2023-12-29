import React, { useCallback, useEffect, useState } from 'react'
import { useAuth } from '../../../../providers';
import { usePosts } from '../../../../hooks/usePosts';

const Like = ({ post, socket }) => {
  const { cookies } = useAuth();
  const { getData } = usePosts()
  const [liked, setLiked] = useState(post?.hasLiked)

  useEffect(() => {
    socket.on('likedPost', async (data) => {
      getData();
    });
    socket.on('unlikedPost', () => {
      getData();
    })
    // return () => {
    //   socket.disconnect();
    // };
  }, [socket, getData]);

  const handleLikeOrUnlike = useCallback(() => {
    if (!liked)
      socket.emit('likePost', { post, user: cookies.get('auth'), type: 'like' })
    else
      socket.emit('unlikePost', { post, user: cookies.get('auth'), type: 'like' })

    setLiked(prev => !prev);
  }, [socket, post, cookies, liked]);

  return (
    <>
      <button type="button" className="position-relative bg-light border border-0" onClick={handleLikeOrUnlike}>
        <i className='fa fa-thumbs-up fs-4' style={{ color: liked ? 'blue' : 'silver' }}>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" style={{ fontSize: 'x-small' }}>
            {post?.likeCount}
            <span className="visually-hidden">unread messages</span>
          </span>
        </i>
      </button>
    </>
  )
}

export default Like
