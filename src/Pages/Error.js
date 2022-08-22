import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <>
      <h1
      style={{ marginTop: '200px' }}>
        404 Error
      </h1>
      <Link to='/'>
        back to home page
      </Link>
    </>
  )
}

export default Error