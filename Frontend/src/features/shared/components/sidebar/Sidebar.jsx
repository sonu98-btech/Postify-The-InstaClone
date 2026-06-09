import React from 'react'
import "./sidebar.scss"
import { useAuth } from '../../../auth/hooks/useAuth'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const navigate = useNavigate();
    const {user} = useAuth();
  return (
    <main className='sidebar-main'>
        <div className="title">
            <img src="https://ik.imagekit.io/yuhb2zywe/ChatGPT%20Image%20Jun%206,%202026,%2008_46_00%20PM.png" alt="" />
        </div>
        <div className="option">
            <div className="home item" onClick={()=>navigate("/home")}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z"></path></svg>
                <p>Home</p>
            </div>
            <div className="sidebar-profile item" onClick={()=>navigate("/profile")}>
                <button className='profile-button'><img src={user?.profilePicture
} alt="" /></button>
                <p>Profile</p>
            </div>
            <div className="search item" onClick={()=>navigate("/search")}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
                <p>Search</p>
            </div>
            <div className="create item" onClick={()=>navigate("/create")}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></svg>
                <p>Create</p>
            </div>
        </div>
    </main>
  )
}

export default Sidebar