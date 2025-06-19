import React from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/appwrite.config'
function AllPosts() {
   const [posts, setPosts] = React.useState([])
   React.useEffect(() => {
      appwriteService.listPosts()
         .then((posts) => {
            if (posts) {
               setPosts(posts.documents)
            }
         })
         .catch((error) => {
            console.error('Failed to fetch posts:', error);
         });
   }, [])
   return (
      <div className='w-full py-8'>
         <Container>
            <div className='flex flex-wrap'>
               {posts.map((post) => (
                  <div key={post.$id} className='p-2 w-full md:w-1/2 lg:w-1/3'>
                     <PostCard post={post} />
                  </div>
               ))}
            </div>
         </Container>
      </div>
   )
}

export default AllPosts