import React from 'react'
import { Link } from 'react-router-dom';
const Links = (props) => {
    const { link, title } = props;
  return (
      <li className={`${title === 'KHPPOSTS' ? 'h1' : 'nav-item'}`}>
        <Link className="nav-link active text-white" to={link}>
          {title}
        </Link>   
      </li>
  )
}
export default Links;
