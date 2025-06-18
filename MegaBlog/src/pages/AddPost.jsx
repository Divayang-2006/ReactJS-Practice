import React from 'react'
import { Container as ContainerComponent, PostForm as PostFormComponenet } from '../components'
function AddPost() {
   return (
      <div className='py-8'>
         <ContainerComponent>
            <PostFormComponenet/>
         </ContainerComponent>
      </div>
   )
}

export default AddPost