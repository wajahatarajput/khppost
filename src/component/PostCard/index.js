import React from 'react';
import Cats from './cats.jpg'
import { Dislike, DropDots, Like, Share } from './component';

const PostCard = ({postPara}) => {
  return (
      <>
      <div className="col">
            
            <div className="card">
            <div className="d-flex pt-3 px-3 justify-content-between">
                  <img
                    className="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width="50"
                    height="50"
                    src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                  />
                  <div>
              <p className="fw-bold mb-0">{postPara?.creator?.displayName }</p>
                    <p className="text-muted mb-0">Rind</p>
            </div>
            <DropDots/>
          </div>
          <hr/>
              <div className="card-body p-4">
                <p className="text-primary card-text mb-0">Article</p>
            <h4 className="card-title">{postPara?.creator?.nickName }</h4>
                <p className="card-text">
                  {postPara?.text}
                </p>

              </div>
              <img
                className="card-img-top w-100 d-block fit-cover"
                              style={{ height: '200px' }}
                src={postPara?.creator?.avatarURL}
          />
          <hr/>
          <div className='d-flex flex-row justify-content-around pt-1 pb-4'>
            <Like />
            <Dislike />
            <Share/>


          </div>
            </div>
          </div>
      
      
      </>
  )
}

export default PostCard
