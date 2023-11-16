import React from 'react'
import { Link } from 'react-router-dom';

const Links = (props) => {
  const { link, title } = props;
  return (
      <Link className="nav-link" to={link}>{title}</Link>
  )
}

export default Links;
