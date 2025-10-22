import React from 'react'
import { useParams } from 'react-router-dom'
// useParams is a hook from react-router-dom. Similar to the useCurrencyInfo() hook we made in 06currencyInfo project.

function User() {
    const {userid} = useParams() // so userid comes from useParams()
  return (
    <div className='bg-gray-500 text-white text-center text-3xl p-3'> User: {userid}</div>
  )
}

export default User