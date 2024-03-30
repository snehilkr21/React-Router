import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

  const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>
        Github Follower : {data?.followers}
        <img src={data?.avatar_url} alt="img" width={100} height={100}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    let response = await fetch('https://api.github.com/users/snehilkr21')
    response = await response.json()
    return response;
}