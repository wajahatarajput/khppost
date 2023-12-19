import axios from 'axios';
import { useCallback, useState } from 'react'
<<<<<<< HEAD
import { usePostProvider } from '../providers';
import { useNavigate } from 'react-router-dom';

export const usePosts = () => {
  // const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { replacePost, updatePost } = usePostProvider();

  const getData = useCallback(async () => {
    await axios.get('http://localhost:3180/getpostdata').then((res) => {
      replacePost(res.data || []);
=======
import { usePost } from '../providers';

export const usePosts = () => {
  const [data, setData] = useState([]);
  const { replacePost, updatePost } = usePost()

  const getData = useCallback(async () => {
    await axios.get('http://localhost:3180/getpostdata').then((res) => {
      setData(res.data || [])
      replacePost(...res.data)
>>>>>>> cbde9b0fcc174dc7e70a9f92bbc11d4fad15df2c
    })
  }, [replacePost]);

  const handleDelete = useCallback(async (id) => {
    await axios.delete(`http://localhost:3180/deletepost`, { data: { id } }).then(async (response) => {
      await getData();
    });
  }, [getData]);

  const handleCreatePost = useCallback(async (post) => {
    await axios.post('http://localhost:3180/createpost', { post }).then((res) => {
<<<<<<< HEAD
      navigate('/browserposts')
    })
  }, [navigate])
=======
      updatePost(prev => [...prev, res.data]);
      replacePost(res.data);
    })
  }, [updatePost])
>>>>>>> cbde9b0fcc174dc7e70a9f92bbc11d4fad15df2c

  const handleUpdatePost = useCallback(async (id, post) => {
    await axios.put('http://localhost:3180/updatepost', { id, post }).then(async (res) => {
      navigate('/browserposts')
    })
  }, [navigate])

  return {
    getData, handleCreatePost, handleDelete, handleUpdatePost
  }
}
