import React, { useCallback, useEffect, useState } from 'react';
import './chat.css';
import { useUsers } from '../../hooks/useUsers';
import socketIOClient from 'socket.io-client';
import { useAuth } from '../../providers';

const ENDPOINT = 'http://localhost:3180';
const Chat = () => {
    const socket = socketIOClient(ENDPOINT);
    const { chatUsers, searchUser } = useUsers();
    const { cookies } = useAuth();
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [messages, setMessages] = useState([]);
    const [conversation, setConversation] = useState(null);

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to server:', socket.id);
        });

        return () => {
            socket.disconnect();
        };
    }, [socket]);

    const sendMessage = useCallback(async (e) => {
        e.preventDefault();

        await socket.emit('sendMessage', {
            content: e.target[0].value,
            sender: cookies.get('auth'),
            receiver: selectedConversation?._id,
            newConversation: !conversation ? 0 : conversation?._id
        });

        e.target[0].value = '';

    }, [socket, cookies, selectedConversation, conversation])


    const handleSearchChange = useCallback(async (e) => {
        searchUser(e.target.value)
    }, [searchUser]);

    return (
        <div className="w-100 p-3">
            <div className="page-title">
                <div className="row gutters">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className='d-flex align-items-center'>
                            <i className="fa fa-arrow-left mx-3" style={{ fontSize: '20px' }}></i>
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
                                                chatUsers.map((user, index) => {
                                                    return (
                                                        <li className="cursor person d-flex justify-content-evenly align-items-center" data-chat="person1" key={index} onClick={() => { setSelectedConversation(user) }}>
                                                            <div className="user">
                                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                                <span className="status active"></span>
                                                            </div>
                                                            <p className="name-time text-truncate">
                                                                <span className="name">{user.displayName}</span>
                                                                <span className="time"> {user.createdAt}</span>
                                                            </p>
                                                        </li>
                                                    )
                                                })
                                            }


                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                                    <div className="selected-user">
                                        <span>To: <span className="name">Emily Russell</span></span>
                                    </div>
                                    <div className="chat-container">
                                        <ul className="chat-box chatContainerScroll">
                                            <li className="chat-left">
                                                <div className="chat-avatar">
                                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                    <div className="chat-name">Russell</div>
                                                </div>
                                                <div className="chat-text">Hello, I'm Russell.
                                                    <br />How can I help you today?</div>
                                                <div className="chat-hour">08:55 <span className="fa fa-check-circle"></span></div>
                                            </li>
                                            <li className="chat-right">
                                                <div className="chat-hour">08:56 <span className="fa fa-check-circle"></span></div>
                                                <div className="chat-text">Hi, Russell
                                                    <br /> I need more information about Developer Plan.</div>
                                                <div className="chat-avatar">
                                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                    <div className="chat-name">Sam</div>
                                                </div>
                                            </li>
                                            <li className="chat-left">
                                                <div className="chat-avatar">
                                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                    <div className="chat-name">Russell</div>
                                                </div>
                                                <div className="chat-text">Are we meeting today?
                                                    <br />Project has been already finished and I have results to show you.</div>
                                                <div className="chat-hour">08:57 <span className="fa fa-check-circle"></span></div>
                                            </li>
                                            <li className="chat-right">
                                                <div className="chat-hour">08:59 <span className="fa fa-check-circle"></span></div>
                                                <div className="chat-text">Well I am not sure.
                                                    <br />I have results to show you.</div>
                                                <div className="chat-avatar">
                                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar5.png" alt="Retail Admin" />
                                                    <div className="chat-name">Joyse</div>
                                                </div>
                                            </li>
                                            <li className="chat-left">
                                                <div className="chat-avatar">
                                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                    <div className="chat-name">Russell</div>
                                                </div>
                                                <div className="chat-text">The rest of the team is not here yet.
                                                    <br />Maybe in an hour or so?</div>
                                                <div className="chat-hour">08:57 <span className="fa fa-check-circle"></span></div>
                                            </li>
                                            <li className="chat-right">
                                                <div className="chat-hour">08:59 <span className="fa fa-check-circle"></span></div>
                                                <div className="chat-text">Have you faced any problems at the last phase of the project?</div>
                                                <div className="chat-avatar">
                                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar4.png" alt="Retail Admin" />
                                                    <div className="chat-name">Jin</div>
                                                </div>
                                            </li>
                                            <li className="chat-left">
                                                <div className="chat-avatar">
                                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                    <div className="chat-name">Russell</div>
                                                </div>
                                                <div className="chat-text">Actually everything was fine.
                                                    <br />I'm very excited to show this to our team.</div>
                                                <div className="chat-hour">07:00 <span className="fa fa-check-circle"></span></div>
                                            </li>
                                        </ul>
                                        <form className="form-group mt-3 mb-0 d-flex" onSubmit={sendMessage}>
                                            <input type='text' className="form-control" rows="2" placeholder="Type your message here..." />
                                            <input className='btn btn-outline-secondary rounded' type='submit' value={'Send'} />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Chat
