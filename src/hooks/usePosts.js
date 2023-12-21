import axios from 'axios';
import { useCallback } from 'react'
import { useAuth, usePostProvider } from '../providers';
import { useNavigate } from 'react-router-dom';

export const usePosts = () => {
  // const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { cookies } = useAuth();
  const { replacePost } = usePostProvider();

  const getData = useCallback(async () => {
    await axios.post('http://localhost:3180/getpostdata', { user: cookies.get('auth') }).then((res) => {
      replacePost(res.data || []);
    })
  }, [replacePost]);

  const handleDelete = useCallback(async (id) => {
    await axios.delete(`http://localhost:3180/deletepost`, { data: { id } }).then(async (response) => {
      await getData();
    });
  }, [getData]);

  const handleCreatePost = useCallback(async (post) => {
    await axios.post('http://localhost:3180/createpost', { post }).then((res) => {
      navigate('/browserposts')
    })
  }, [navigate])

  const handleUpdatePost = useCallback(async (id, post) => {
    await axios.put('http://localhost:3180/updatepost', { id, post }).then(async (res) => {
      navigate('/browserposts')
    })
  }, [navigate])

  return {
    getData, handleCreatePost, handleDelete, handleUpdatePost
  }
}
