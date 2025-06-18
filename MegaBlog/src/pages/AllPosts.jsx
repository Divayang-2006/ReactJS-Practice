import React from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/appwrite.config'
function AllPosts() {
   const [posts, setPosts] = React.useState([])
   React.useEffect(()=>{}, [])
   appwriteService.listPosts([])
      .then((posts) => {
         if(posts){
            setPosts(posts.documents)
         }
      })
   return (
      <div className='w-full py-8'>
         <Container>
            <div className='flex flex-wrap'>
               {posts.map((post) => (
                  <div key={post.$id} className='p-2 w-1'>
                     <PostCard post={post} />
                  </div>
               ))}
            </div>
         </Container>
      </div>
   )
}

export default AllPosts