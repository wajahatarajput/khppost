import React, { useCallback, useEffect, useState } from 'react'
import { ConversationProviderContext } from './context';
import { useAuth } from '../AuthProvider/useAuth';
import axios from 'axios';

const ConversationProvider = ({ children }) => {
    const [chatUsers, setChatUsers] = useState([]);
    const { cookies } = useAuth();

    const getConversations = useCallback(async () => {
        await axios.post('http://localhost:3180/getConversation', { id: cookies?.get('auth') }).then(({ data }) => {
            setChatUsers(prev => [...prev, data?.reciever?._id === cookies.get('auth') ? data?.sender : data?.reciever])
        })
    }, [cookies])

    const searchUser = useCallback(async (text) => {
        await axios.post('http://localhost:3180/searchuser', { text }).then((res) => {
            setChatUsers(prev => [...prev, ...res.data || []]);
        })
    }, []);


    useEffect(() => {
        cookies?.get('auth') && getConversations()
    }, [getConversations, cookies])

    return (
        <ConversationProviderContext.Provider value={{ searchUser, chatUsers }}>
            {children}
        </ConversationProviderContext.Provider>
    )
}

export default ConversationProvider;
