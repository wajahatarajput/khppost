import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usePosts } from '../../hooks/usePosts';
import { useAuth } from '../../providers';

const ComposePostComponent = () => {
  const location = useLocation();
  const post = location.state || {};
  const { cookies } = useAuth()
  const [image, setImage] = useState(null);
  const { handleCreatePost, handleUpdatePost } = usePosts();

  const handleImageUpload = useCallback((e) => {
    const file = e.target.files[0];
    setImage(setImage);
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageDataURI = e.target.result;
      setImage(imageDataURI);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const currentPost = {
      content: e.target[1].value,
      user: cookies.get('auth'),
      createdAt: new Date().now,
      reactions: [],
      comments: [],
      photo: image || post?.photo,
      tags: [e.target[2].value],
      status: 'PUBLISHED'
    };


    //edit post call api for edit post
    !post?.id
      ?
      await handleCreatePost(currentPost)
      :
      await handleUpdatePost(currentPost)
  }, [image, handleCreatePost, handleUpdatePost, post]);


  return (
    <div className='main-cover'>
      <div className={`containerMain`}>
        <div className="forms">
          <div className={`form login`}>
            <span className="title">{post?.id ? 'Edit Post' : 'Compose Post'} </span>
            <form onSubmit={handleSubmit}>
              <div style={{ background: `url(${image || post?.photo})`, height: '250px' }}>
                <label className='fa fa-upload upload-icon' htmlFor={'file'} />
                <input id='file' type="file" onChange={handleImageUpload} hidden />
              </div>
              <div className="input-field">
                <input type="text" placeholder="Enter Text" defaultValue={post?.text} required />
                <i className="uil uil-envelope icon"></i>
              </div>
              <div className="input-field">
                <input
                  type='text'
                  className="tags"
                  placeholder="Enter Tags"
                  required
                  defaultValue={post?.id && post?.tags[0]?.slug}
                />
                <i className="uil uil-lock icon"></i>
              </div>
              <div className="input-field button">
                <input type="submit" value={post?.id ? 'Update' : 'Create'} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposePostComponent;
