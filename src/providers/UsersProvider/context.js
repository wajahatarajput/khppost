import { createContext } from "react";

export const UserContext = createContext({
    users: [],
    addUserData : ()=>{}
})