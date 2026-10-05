import appwriteService from '../appwrite/appwrite.config'
import {Link} from 'react-router-dom'
function PostCard(post) {
   const {$id, title, featuredImage} = post.post;
   return (
      <Link to={`/post/${$id}`}>
         <div className='w-full bg-gray-100 rounded-xl px-4'>
            <div className='w-full justify-center mb-4'>
               <img src={appwriteService.getFilepreview(featuredImage)} alt={title} className='rounded-xl'/>
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
         </div>
      </Link>
   )
}

export default PostCard