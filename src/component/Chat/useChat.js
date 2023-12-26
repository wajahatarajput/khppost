import { useCallback, useState } from "react";
import { useAuth, useConversations } from "../../providers";
import axios from "axios";

export const useChat = (socket) => {
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [messages, setMessages] = useState([]);
    const [conversation, setConversation] = useState(null);
    const { cookies } = useAuth();
    const { searchUser } = useConversations();

    var con = null;

    const getConversation = useCallback(async (conversation) => {
        await axios.post('http://localhost:3180/getConversation', { id: conversation?._id }).then(async (res) => {
            con = res.data?._id
            await axios.post('http://localhost:3180/getConversationMessages', { id: res?.data?._id }).then((res) => {
                setMessages(res.data)
            })
        })
        setConversation(con)
    }, []);

    const loadMessages = useCallback(async (conv) => {
        getConversation(conv).then(async () => {
            setSelectedConversation(conv);
        })

    }, [getConversation])

    const sendMessage = useCallback(async (e) => {
        e.preventDefault();

        await socket.emit('sendMessage', {
            content: e.target[0].value,
            sender: cookies.get('auth'),
            receiver: selectedConversation?._id,
            newConversation: !conversation ? 0 : conversation
        });

        e.target[0].value = '';

    }, [socket, cookies, selectedConversation, conversation])


    const handleSearchChange = useCallback(async (e) => {
        searchUser(e.target.value)
    }, [searchUser]);


    return {
        setMessages,
        handleSearchChange,
        sendMessage,
        loadMessages,
        messages,
        cookies,
        selectedConversation
    }
}
