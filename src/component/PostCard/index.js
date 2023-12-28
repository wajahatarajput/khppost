import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Dislike, DropDots, Like, Share } from './component';
import { usePosts } from '../../hooks/usePosts';
import socketIOClient from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../providers';

const PostCard = ({ post, handleDelete, index, isViewPage = false }) => {

  const ENDPOINT = 'http://localhost:3180';
  const socket = useMemo(() => socketIOClient(ENDPOINT), []);
  const { getData } = usePosts();
  const navigate = useNavigate();
  const { cookies } = useAuth();
  const [text, setText] = useState("");
  const [comments, setComments] = useState(post?.comments || []);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server:', socket.id);
    });

    socket.on('newComment', ({ updatedPost }) => {
      setComments(updatedPost?.comments)
    });

    // socket.on('disconnect', () => {
    //   console.log('Disconnected from server:', socket.id);
    //   // Additional disconnect handling logic can be added here
    // });

  }, [socket, getData, post]);



  const handleCommentPublish = useCallback((e) => {
    e.preventDefault();
    const comment = {
      content: text,
      user: cookies.get('auth'),
      post: post?._id
    }
    socket.emit('publishComment', { comment });

  }, [post, cookies, socket, text])

  console.log(post)

  return (
    <>
      {
        isViewPage &&
        <>
          <i className='ms-5 fa fa-arrow-left btn btn-outline-secondary border border-0' onClick={() => {
            navigate(-1)
          }} />
        </>
      }
      <div className={`${isViewPage ? " d-flex flex-column justify-content-center align-items-center" : "col"}`} key={index}>

        <div className={`${isViewPage} ? 'card w-50' : 'card'`} >
          <div className="d-flex pt-3 px-3 justify-content-between">
            <img
              alt=''
              className="rounded-circle flex-shrink-0 me-3 fit-cover"
              width="50"
              height="50"
              src={post?.user?.profile}
            />
            <div>
              <p className="fw-bold mb-0">{post?.user?.displayName}</p>
              <p className="text-muted mb-0">{post?.user?.nickName}</p>
            </div>
            <DropDots post={post} handleDelete={handleDelete} />
          </div>
          <hr />
          <div className="card-body p-4">
            {
              post?.tags?.map((tag, index) => {
                return <p className="text-primary card-text mb-0" key={index}>{tag}</p>
              })
            }
            <h4 className="card-title">{post?.content}</h4>
            <p className="card-text" style={{
              height: '48px',
              overflow: 'hidden'
            }}>
              {post?.text}
            </p>

          </div>
          <img
            alt=''
            className="card-img-top w-100 d-block fit-cover"
            style={{ height: '200px' }}
            src={post.photo[0]}
          />
          <hr />
          <div className='d-flex flex-row justify-content-around pt-1 pb-4'>
            <Like post={post} socket={socket} />
            <Dislike post={post} socket={socket} />
            <Share post={post} />


          </div>
          {
            isViewPage &&
            <>
              <hr />
              <ul class="list-group list-group-flush">

                {comments.map((comment, index) => {
                  return (
                    <li class="list-group-item">
                      <div>
                        <div className='d-flex justify-content-between align-items-center'>
                          <span>{comment.user?.displayName}</span>
                          <span style={{ fontSize: 9 }}> {comment?.createdAt} </span>
                        </div>
                        <p style={{ color: '#24242491', fontSize: 14 }}>
                          {comment?.content}
                        </p>
                      </div>
                    </li>
                  )
                })
                }
              </ul>
              <div className='form d-flex'>
                <input type='text' className='form-control' onChange={(e) => setText(e.target.value)} />
                <button value='Comment' className=' form-control btn btn-light w-25' onClick={handleCommentPublish}>
                  <i className='fa fa-paper-plane ' />
                </button>
              </div>
            </>
          }
        </div>
      </div>
    </>

  )
}

export default PostCard
