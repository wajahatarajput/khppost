import React, { useCallback, useEffect, useState } from 'react'
import { SearchProviderContext } from './context';

const SearchProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    return (
        <SearchProviderContext.Provider value={{ posts }}>
            {children}
        </SearchProviderContext.Provider>
    )
}

export default SearchProvider;
