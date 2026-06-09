import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './app.routes'
import { AuthProvider } from './features/auth/authContext'
import { PostContext } from './features/post/postContext'
import { PostProvider } from './features/post/postContext'
import { FollowProvider } from './features/follow/followContext'
import "./features/shared/style/global.scss"
const App = () => {
  console.log("app rendered")
  return (
    <FollowProvider>
    <AuthProvider>
      
        <PostProvider>
          <RouterProvider router={router} />
        </PostProvider>
      
    </AuthProvider>
    </FollowProvider>
  )
}

export default App