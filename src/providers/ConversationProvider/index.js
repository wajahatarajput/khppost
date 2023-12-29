import React, { useCallback, useEffect, useState } from 'react'
import { ConversationProviderContext } from './context';
import { useAuth } from '../AuthProvider/useAuth';
import axios from 'axios';

const ConversationProvider = ({ children }) => {
    const [chatUsers, setChatUsers] = useState([]);
    const { cookies } = useAuth();

    function getUniqueValuesById(arr) {
        // Create an empty object to store unique values based on id
        const uniqueValuesById = {};

        if (arr[0]) {
            // Iterate through the array of objects
            arr.forEach(obj => {
                // Use the object's id as the key to store the object itself
                uniqueValuesById[obj._id] = obj;
            });

            // Convert the values of the object back to an array to get unique objects based on id
            const uniqueArray = Object.values(uniqueValuesById);

            return uniqueArray;
        }
        return []
    }

    const getConversations = useCallback(async () => {
        await axios.post('http://localhost:3180/getConversation', { id: cookies?.get('auth') }).then(({ data }) => {
            const usersDataByConversation = data?.map((conversation) => {
                return conversation?.receiver?._id === cookies.get('auth') ? conversation?.sender : conversation?.receiver;
            })
            setChatUsers(prev => getUniqueValuesById([...prev, ...usersDataByConversation]));

        })
    }, [cookies])

    const searchUser = useCallback(async (text) => {
        await axios.post('http://localhost:3180/searchuser', { text, id: cookies.get('auth') }).then((res) => {
            setChatUsers(prev => getUniqueValuesById([...prev, ...res.data || []]));
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
