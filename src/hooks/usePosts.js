import axios from 'axios';
import { useCallback, useState } from 'react'

export const usePosts = () => {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    await axios.get('http://localhost:3180/getpostdata').then((res) => {
      setData(res.data)
    })
  }, []);

  const handleDelete = useCallback(async (id) => {
    await axios.delete(`http://localhost:3180/deletepost`, { data: { id } }).then((response) => {
      setData(response.data);
    });
  }, []);

  const handleCreatePost = useCallback(async (post) => {
    await axios.post('http://localhost:3180/createpost', { post }).then((res) => {
      setData(prev => [...prev, res.data]);
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
