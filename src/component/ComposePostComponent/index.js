import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { usePosts } from '../../hooks/usePosts';
import { useAuth } from '../../providers'

const ComposePostComponent = () => {
  const location = useLocation();
  const { id, post } = location.state || {};
  const [image, setImage] = useState(null);
  const { handleCreatePost, handleUpdatePost } = usePosts();
  const { cookies } = useAuth();

  const handleImageUpload = useCallback((e) => {
    const file = e.target.files[0];
    console.log(file)
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

    // toast.error("Please Upload the Image");
    // console.log(!!image)

    if (image === null) {
      toast.error("Please Upload the Image");
      return;
    } else {

      const currentPost = {
        content: e.target[1].value,
        user: cookies.get('auth'), // Assuming you have a valid ObjectId for the user
        createdAt: new Date(),
        reactions: [], // Assuming you have valid ObjectIds for reactions
        comments: [], // Assuming you have valid ObjectIds for comments
        photo: image || post?.photo, // Assuming you have actual photo data as a Buffer
        tags: [e.target[2].value],
        status: "PUBLISHED"
      };


      //edit post call api for edit post
      !id
        ?
        await handleCreatePost(currentPost)
        :
        await handleUpdatePost(id, currentPost)
    }
  }, [image, handleCreatePost, handleUpdatePost, id, cookies, post]);


  return (
    <div className='main-cover'>
      <div className={`containerMain`}>
        <div className="forms">
          <div className={`form login`}>
            <span className="title">{id ? 'Edit Post' : 'Compose Post'} </span>
            <form onSubmit={handleSubmit}>
              <div style={{ background: `url(${image || post?.photo})`, height: '250px' }}>
                <label className='fa fa-upload upload-icon' htmlFor={'file'} />
                <input id='file' type="file" onChange={handleImageUpload} hidden />
              </div>
              <div className="input-field">
                <input type="text" placeholder="Enter Text" defaultValue={post?.content} required />
                <i className="uil uil-envelope icon"></i>
              </div>
              <div className="input-field">
                <input
                  type='text'
                  className="tags"
                  placeholder="Enter Tags"
                  required
                  defaultValue={id && post?.tags[0]}
                />
                <i className="uil uil-lock icon"></i>
              </div>
              <div className="input-field button">
                <input type="submit" value={id ? 'Update' : 'Create'} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposePostComponent;
