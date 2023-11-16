import React from 'react'
import { Link } from 'react-router-dom';

const Links = (props) => {
    const { link, title } = props;
  return (
      <li className="nav-item">
        <Link className="nav-link active" to={link}>
          {title}
        </Link>
      </li>
  )
}

export default Links;
