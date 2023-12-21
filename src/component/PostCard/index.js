import React from 'react';
import { Dislike, DropDots, Like, Share } from './component';

const PostCard = ({ post, handleDelete, index }) => {
  console.log(post)
  return (
    <div className="col" key={index}>

      <div className="card">
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
          <Like post={post} />
          <Dislike />
          <Share />


        </div>
      </div>
    </div>
  )
}

export default PostCard
