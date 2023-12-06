import React from 'react'
import { Link } from 'react-router-dom'

const DropDots = ({post, handleDelete}) => {
  return (
      <>
            <div className="btn-group">
              <svg  className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" xmlns="http://www.w3.org/2000/svg" height="16" width="4" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Edit
                    </Link>
                  </li>
          <li className='dropdown-item' onClick={() => {
            handleDelete(post?.id)
                  }}>
                  {/* <button className="dropdown-item" to="#"> */}
                      Delete
                    {/* </button> */}
                </li>
                <li>
                <Link className="dropdown-item" to="#">
                      Block
                  </Link>
                  </li>
                </ul>
              </div>
      </>
  )
}

export default DropDots
