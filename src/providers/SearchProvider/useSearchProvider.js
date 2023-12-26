import { useContext } from "react";
import { SearchProviderContext } from "./context";

export const useSearchProvider = () => {
    const { posts } = useContext(SearchProviderContext)
    return { posts}
}
