import React, { useEffect } from 'react';
import './chat.css';
import { useAuth } from '../../providers';
import { useNavigate } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { useChat } from './useChat';
import { useConversations } from '../../providers';

const ENDPOINT = 'http://localhost:3180';

const Chat = () => {
    const navigate = useNavigate();
    const socket = socketIOClient(ENDPOINT);

    const { chatUsers } = useConversations();
    const { cookies } = useAuth();
    const { handleSearchChange, sendMessage, loadMessages, messages, selectedConversation, setMessages } = useChat(socket);

    useEffect(() => {
        socket.on('newMessage', async (data) => {
            setMessages(prev => [...prev, data]);
        });

        socket.on('connect', () => {
            console.log('Connected to server:', socket.id);
        });

        return () => {
            socket.disconnect();
        };
    }, [socket, setMessages]);

    return (
        <div className="w-100 p-3">
            <div className="page-title">
                <div className="row gutters">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className='d-flex align-items-center'>
                            <i className="fa fa-arrow-left mx-3 cursor-pointer" onClick={() => {
                                navigate(-1);
                            }} style={{ fontSize: '20px' }}></i>
                            <h5 className="title" style={{ marginBottom: 0 }}>Chat App</h5>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"> </div>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card m-0">
                            <div className="row no-gutters">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                                    <div className="users-container">
                                        <div className="chat-search-box">
                                            <div className="input-group">
                                                <input onChange={handleSearchChange} className="form-control" placeholder="Search" />
                                                <div className="input-group-btn">
                                                    <button type="button" className="btn btn-outline-secondary">
                                                        <i className="fa fa-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="users">
                                            {
                                                chatUsers.length > 0 ? (
                                                    chatUsers.map((user, index) => (
                                                        <li
                                                            className="cursor person d-flex justify-content-evenly align-items-center"
                                                            data-chat="person1"
                                                            key={index}
                                                            onClick={() => {
                                                                loadMessages(user);
                                                            }}
                                                        >
                                                            <div className="user">
                                                                <img
                                                                    src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                                                                    alt="Retail Admin"
                                                                />
                                                                <span className="status active"></span>
                                                            </div>
                                                            <p className="name-time text-truncate">
                                                                <span className="name">{user.displayName}</span>
                                                                <span className="time"> {user.createdAt}</span>
                                                            </p>
                                                        </li>
                                                    ))
                                                ) : (
                                                    <p>No conversations available</p>
                                                )
                                            }

                                        </ul>
                                    </div>
                                </div>
                                {
                                    selectedConversation &&
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                                        <div className="selected-user">
                                            <span>To: <span className="name">{selectedConversation?.displayName}</span></span>
                                        </div>
                                        <div className="chat-container">
                                            <ul className="chat-list chat-box chatContainerScroll">
                                                {
                                                    messages.map((message, index) => {
                                                        return (
                                                            <li key={index} className={`${cookies.get('auth') === message.sender ? "chat-right" : "chat-left"}`}>
                                                                <div className="chat-avatar">
                                                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                                </div>
                                                                <div>
                                                                    <div className={`
${cookies.get('auth') === message.sender ? " chat-text text-align-right" : " chat-text"}`}>
                                                                        {message.message}
                                                                    </div>
                                                                    <small>
                                                                        <div className="chat-hour">{message.sentOn}
                                                                        </div>
                                                                    </small>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <form className="form-group mt-3 mb-0 d-flex" onSubmit={sendMessage}>
                                                <input type='text' className="form-control" rows="2" placeholder="Type your message here..." />
                                                <input className='btn btn-outline-secondary rounded' type='submit' value={'Send'} />
                                            </form>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Chat
