const { createContext } = require("react");

export const TodoContext = createContext({
    data : [],
    setListItem : (item)=>{}
})