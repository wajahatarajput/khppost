import { useContext } from "react";
import { ConversationProviderContext } from "./context";

export const useConversations = () => {
    const { searchUser, chatUsers } = useContext(ConversationProviderContext)
    return {
        searchUser, chatUsers
    }
}
