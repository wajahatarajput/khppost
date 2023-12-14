import { useContext } from "react";
import { AuthContext } from "./context";

export const useAuth = () => {
    const { user, setUser, cookies } = useContext(AuthContext)
    return {
        user,
        setUser,
        cookies
    }
}
