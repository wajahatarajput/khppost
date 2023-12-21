import React, { createContext, useContext, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const SocketContext = createContext();

const ENDPOINT = 'http://localhost:3180';
const socket = socketIOClient(ENDPOINT);

const SocketProvider = ({ children }) => {
    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to server:', socket.id);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

const useSocket = () => {
    const context = useContext(SocketContext);

    if (!context) {
        throw new Error('useSocket must be used within a SocketProvider');
    }

    return context;
};

export { SocketProvider, useSocket };
