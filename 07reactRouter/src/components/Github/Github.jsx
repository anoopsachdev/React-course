import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/anoopsachdev')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

  return (
    <div className='flex items-center justify-center bg-gray-600 text-white text-3xl m-4 p-6 rounded-lg'>
      {data.login ?(
          <>
          <img className='w-48 h-48 rounded-xl object-cover border-4 border-white shadow-lg mr-8' src={data.avatar_url} alt="Git Profile Picture" />
          <div className='space-y-3'>
            <div>Login ID: {data.login}</div>
            <div> Github followers: {data.followers} </div>
            <div> Location: {data.location} </div>
          </div>
          </>
        ) : (
          <div>Loading...</div>
        )
      }
        
    </div>
  )
}

export default Github


export const githubInfoLoader = async () =>{
  const response = await fetch('https://api.github.com/users/anoopsachdev')
  return response.json();
}
// now how will you get the Github followers?
// yeh hota hai normally ek api call se
// now you will only call the api when this component is loaded

// doubts:
/*
what is async keyword
what is await keyword
*/