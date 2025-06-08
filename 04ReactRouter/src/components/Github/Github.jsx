import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

   const data = useLoaderData()
   // const [data, setData] = useState([])
   // useEffect(() => {
   // fetch('https://api.github.com/users/Divayang-2006')
   // .then(response => response.json())
   // .then(data => setData(data))
   // }, [])
   

   return (
      <div className='bg-gray-600 text-amber-300 text-2xl font-extrabold '>Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git Picture" width='300'/>
      </div>
   )
}

export default Github

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/Divayang-2006')
   return response.json()
}