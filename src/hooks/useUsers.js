import axios from 'axios';
import { useCallback, useState } from 'react'
import { useAuth } from '../providers';

export const useUsers = () => {
    const [data, setData] = useState([]);
    const { user, setUser } = useAuth();

    const loginUser = useCallback(async (user) => {
        await axios.post('http://localhost:3180/login', { user }).then((res) => {
            setData(res.data)
            setUser(res.data)
        })
    }, [setUser]);

    const handleDelete = useCallback(async (id) => {
        await axios.delete(`http://localhost:3180/deletepost`, { data: { id } }).then((response) => {
            setData(response.data);
        });
    }, []);

    const handleRegisterUser = useCallback(async (user) => {
        await axios.post('http://localhost:3180/register', { user }).then((res) => {
            // setData(prev => [...prev, res.data]);
        })
    }, [])

    const handleUpdateUser = useCallback(async (post) => {
        await axios.put('http://localhost:3180/updatepost', { post }).then((res) => {
            //write logic to update the specific post from post array
            // setData(prev => [...prev, res.data]);
        })
    }, [])

    return {
        data, setData, loginUser, handleRegisterUser, handleDelete, handleUpdateUser
    }
}
