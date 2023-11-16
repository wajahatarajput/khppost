import React from 'react'

const Links = (props) => {
  const { Links, Title } = props;
  return (
    <div>
      <a className="nav-link active" aria-current="page" href={Links}>{Title}</a>
    </div>
  )
}

export default Links;
