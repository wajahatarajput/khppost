import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usePosts } from '../../hooks/usePosts';

const ComposePostComponent = () => {
  const location = useLocation();
  const post = location.state || {};
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
      id: "1234",
      creator: {
        id: "5cd0104d-e42b-47ea-b0f2-9e0f0b7bf510",
        displayName: "Mujeeb",
        nickName: "Wallis & Futuna-coral-Neysa",
        avatarURL: image || post?.photo?.mainSrc,
        __typename: "User"
      },
      status: "PUBLISHED",
      to: {
        name: "Sukkur, Pakistan",
        __typename: "Location"
      },
      from: {
        name: "Sukkur, Pakistan",
        __typename: "Location"
      },
      photo: {
        mainSrc: image || post?.photo?.mainSrc,
        thumbnailSrc: "/api/content/218ad957-6972-41aa-bc2f-50e59c32ab24.jpg",
        alt: e.target[1].value,
        __typename: "Photo"
      },
      text: e.target[1].value,
      createdOn: post?.id ? post?.createdOn : new Date().toLocaleString(),
      updatedOn: new Date().toLocaleString(),
      statistics: {
        id: "703d563f-a6df-4496-8efa-64a741979c12",
        views: 0,
        likes: 0,
        dislikes: 0,
        replies: 0,
        repeats: 0,
        saves: 0,
        flags: 0,
        state: "NEITHER",
        hasReplied: false,
        hasRepeated: false,
        hasSaved: false,
        hasFlagged: false,
        __typename: "PostStatistics"
      },
      tags: [
        {
          slug: e.target[2].value,
          __typename: "Tag"
        }
      ],
      parent: {
        id: "01399764-8ff5-43ae-8770-cde92173a47a",
        __typename: "Post"
      },
      __typename: "Post"
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
              <div style={{ background: `url(${image || post?.photo?.mainSrc})`, height: '250px' }}>
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
