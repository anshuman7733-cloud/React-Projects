import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center bg-gray-700 text-3xl text-white font-semibold p-4 '>User: {userid}</div>
  )
}

export default User