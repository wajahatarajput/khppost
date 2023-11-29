

import { useContext } from 'react'
import { TodoContext } from './context'

const useTodo = () => {
    const { data, setListItem } = useContext(TodoContext)
    return {
        data, setListItem
  }
}

export default useTodo
