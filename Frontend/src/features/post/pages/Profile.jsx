import React,{useEffect} from 'react'
import "../style/profile.scss"
import Sidebar from '../../shared/components/sidebar/Sidebar'
import {useAuth} from '../../auth/hooks/useAuth'
import {usePost} from '../hooks/usePost'
import {useFollow} from '../../follow/hooks/use.follow'
import {useNavigate} from 'react-router-dom'

const Profile = () => {

    const navigate = useNavigate()

    const {user} = useAuth()

    const {
        userPosts,
        getUserPostHandler
    } = usePost()

    const {
        followers,
        following,
        getFollowersHandler,
        getFollowingHandler
    } = useFollow()

    useEffect(()=>{
        getUserPostHandler()
        getFollowersHandler()
        getFollowingHandler()
    },[])

    return (
        <div className="profile-container">

            <div className='sidebar-container'>
                <Sidebar/>
            </div>

            <div className="profile-main">

                <div className="profile-header">

                    <div className="left-header">
                        <div className="img-div">
                            <img
                            src={user?.profilePicture}
                            alt=""
                            />
                        </div>
                    </div>

                    <div className="right-header">

                        <div className="upper-right">

                            <div>
                                <p className='username'>
                                    {user?.username}
                                </p>

                                <p className='name'>
                                    {user?.name}
                                </p>
                            </div>

                            <div>
                                <button>
                                    Edit Profile
                                </button>
                            </div>

                        </div>

                        <div className="lower-right">

                            <div className="post-count">
                                <p className='post-numbers'>
                                    {
                                        userPosts?.length
                                        || 0
                                    }
                                </p>

                                <p className='count-title'>
                                    Posts
                                </p>
                            </div>

                            <div
                            className="follower-count"
                            onClick={()=>
                                navigate(
                                    "/follow"
                                )
                            }
                            style={{
                                cursor:"pointer"
                            }}
                            >
                                <p className='follower-numbers'>
                                    {
                                        followers?.length
                                        || 0
                                    }
                                </p>

                                <p className='count-title'>
                                    Followers
                                </p>
                            </div>

                            <div
                            className="following-count"
                            onClick={()=>
                                navigate(
                                    "/follow"
                                )
                            }
                            style={{
                                cursor:"pointer"
                            }}
                            >
                                <p className='following-numbers'>
                                    {
                                        following?.length
                                        || 0
                                    }
                                </p>

                                <p className='count-title'>
                                    Following
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="bio-container">
                    <p className="bio">
                        {user?.bio}
                    </p>
                </div>

                <div className="post-grid-container">

                    <div className="icon">

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 10L8 10V14H4V10ZM4 19V16H8V19H4ZM10 19V16H14V19H10ZM16 19V16H20V19H16ZM16 14V10H20V14H16ZM16 8V5H20V8H16ZM14 5V8H10V5H14ZM14 10V14H10V10H14ZM4 8V5H8V8L4 8ZM3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21 3 21 3H3Z"></path></svg>
                        </button>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg>
                        </button>

                    </div>

                    <div className="grid">

                        {
                            userPosts?.map((post)=>(
                                <div
                                key={post._id}
                                className="posts"
                                >
                                    <img
                                    src={post.imgUrl}
                                    alt=""
                                    />
                                </div>
                            ))
                        }

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Profile