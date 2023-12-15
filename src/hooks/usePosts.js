import axios from 'axios';
import { useCallback, useState } from 'react'
import { usePost } from '../providers';

export const usePosts = () => {
  const [data, setData] = useState([]);
  const { replacePost } = usePost();

  const getData = useCallback(async () => {
    await axios.get('http://localhost:3180/getpostdata').then((res) => {
      replacePost(res.data || {})
      // setPost(res.data || [])

    })
  }, []);

  const handleDelete = useCallback(async (id) => {
    await axios.delete(`http://localhost:3180/deletepost`, { data: { id } }).then(async (response) => {
      // await setPost();
    });
  }, [getData]);

  const handleCreatePost = useCallback(async (post) => {
    await axios.post('http://localhost:3180/createpost', { post }).then((res) => {
      // setData(prev => [...prev, res.data]);
      replacePost(prev =>[...prev,res.data]);
      // setPost([res.data]);

    })
  }, [])

  const handleUpdatePost = useCallback(async (post) => {
    await axios.put('http://localhost:3180/updatepost', { post }).then((res) => {
      //write logic to update the specific post from post array
      // setData(prev => [...prev, res.data]);
    })
  }, [])

  return {
    data, setData, getData, handleCreatePost, handleDelete, handleUpdatePost
  }
}
