import React from 'react'
import { Link } from 'react-router-dom'

const Share = ({ post }) => {
  return (
    <>
      <Link to={'/view'} state={{
        post,
        isViewPage: true
      }}>
        <button type="button" class="position-relative bg-light border border-0">
          <i className='fa far fa-comment fs-4' style={{ color: 'silver' }}>
          </i>
        </button>
      </Link>
    </>
  )
}

export default Share
