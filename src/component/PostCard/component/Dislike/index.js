import React, { useCallback, useEffect, useState } from 'react'
import { usePosts } from '../../../../hooks/usePosts';
import { useAuth } from '../../../../providers';

const Dislike = ({ post, socket }) => {
  const { cookies } = useAuth();
  const { getData } = usePosts()
  const [liked, setLiked] = useState(post?.hasLiked)

  useEffect(() => {
    socket.on('dislikedPost', async (data) => {
      getData();
    });
    socket.on('undislikedPost', () => {
      getData();
    })

    // return () => {
    //   socket.disconnect();
    // };
  }, [socket, getData]);

  const handledisLikeOrUndislike = useCallback(() => {
    if (!liked)
      socket.emit('dislikePost', { post, user: cookies.get('auth'), type: 'dislike' })
    else
      socket.emit('undislikePost', { post, user: cookies.get('auth'), type: 'dislike' })

    setLiked(prev => !prev);
  }, [socket, post, cookies, liked]);
  return (
    <>
      <button type="button" className="position-relative bg-light border border-0" onClick={handledisLikeOrUndislike}>
        <i className='fa fa-thumbs-down fs-4' style={{ color: liked ? 'red' : 'silver' }}>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: 'x-small' }}>
            {post?.dislikeCount}
            <span className="visually-hidden">unread messages</span>
          </span>
        </i>
      </button>
    </>
  )
}

export default Dislike
