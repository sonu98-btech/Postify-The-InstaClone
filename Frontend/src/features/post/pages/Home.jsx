import React, { useEffect } from 'react'
import "../style/home.scss"
import Sidebar from '../../shared/components/sidebar/Sidebar'
import Stories from '../components/stories/Stories'
import PostCard from '../components/postCard/PostCard'
import Suggesteduser from '../components/suggestedUser/Suggesteduser'
import { useState } from 'react'
import { usePost } from '../hooks/usePost'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const {getAllFeedPostHandler} = usePost()
  useEffect(()=>{
    getAllFeedPostHandler()
  },[])
  return (
    <main className='post-main'>
        <div className='sidebar-container'>
            <Sidebar/>
        </div>
        <div className="center">
           <Stories/>
           <PostCard/>
        </div>
        <div className="suggested-user-container">
            <Suggesteduser/>
        </div>
    </main>
  )
}

export default Home