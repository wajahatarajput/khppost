import React, { useCallback, useEffect, useState } from 'react'
import { PostCard, PostGrid } from '../../component';
import axios from 'axios';

const BrowsePostsFeature = () => {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    await axios.get('http://localhost:3180/getpostdata').then((res) => {
      setData(res.data)
    })
  },[])

  useEffect(() => {
    getData()
  },[getData])

  return (
    <PostGrid>
      {
        data.map((post) => {
          return <PostCard post={post}/>
        })
      }
    </PostGrid>
  )
}

export default BrowsePostsFeature;