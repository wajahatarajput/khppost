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
        await axios.delete(`http://localhost:3180/deletepost`,{data: {id}}).then((response) => {
          setData(response.data);
        });
      }, []); 
    
      const handleCreatePost = useCallback(async () => {
        await axios.post('http://localhost/createpost', { post: {} }).then((res) => {
            setData(prev=> [...prev,res.data]);
            })
    },[])

    return {
      data,setData, getData, handleCreatePost, handleDelete
  }
}
