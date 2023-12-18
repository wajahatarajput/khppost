import { useContext } from "react";
import { PostProviderContext } from "./context";

export const usePostProvider = () => {
    const { posts, replacePost, updatePost } = useContext(PostProviderContext)
    return { posts, replacePost, updatePost }
}
