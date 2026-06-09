import React,{useEffect,useState} from 'react'
import '../style/follow.scss'
import Sidebar from '../../shared/components/sidebar/Sidebar'
import Suggesteduser from '../../post/components/suggestedUser/Suggesteduser'
import {useFollow} from '../hooks/use.follow'

const Follow = () => {

    const [activeTab,setActiveTab] = useState("followers")

    const {
        followers,
        following,
        loading,
        getFollowersHandler,
        getFollowingHandler,
        unfollowUserHandler
    } = useFollow()

    useEffect(()=>{
        getFollowersHandler()
        getFollowingHandler()
    },[])

    if(loading){
        return <h1>Loading....</h1>
    }

    return (
        <div className="follow-page">
            <div className="sidebar-container">
                <Sidebar/>
            </div>

            <div className="follow-main">

                <div className="follow-header">
                    <button
                    className={activeTab==="followers"?"active":""}
                    onClick={()=>setActiveTab("followers")}>
                        Followers
                    </button>

                    <button
                    className={activeTab==="following"?"active":""}
                    onClick={()=>setActiveTab("following")}>
                        Following
                    </button>
                </div>

                <div className="follow-list">

                    {
                        activeTab==="followers"
                        ?
                        followers?.map((user)=>(
                            <div key={user._id} className="follow-user-card">
                                <div className="left-follow">
                                    <img src={user?.profilePicture} alt="" />

                                    <div className="user-info">
                                        <p className="username">
                                            {user?.username}
                                        </p>
                                    </div>
                                </div>

                                <button className="follow-button">
                                    Remove
                                </button>
                            </div>
                        ))
                        :
                        following?.map((user)=>(
                            <div key={user._id} className="follow-user-card">
                                <div className="left-follow">
                                    <img src={user?.profilePicture} alt="" />

                                    <div className="user-info">
                                        <p className="username">
                                            {user?.username}
                                        </p>
                                    </div>
                                </div>

                                <button
                                className="follow-button"
                                onClick={()=>
                                    unfollowUserHandler(user._id)
                                }>
                                    Unfollow
                                </button>
                            </div>
                        ))
                    }

                </div>

            </div>

            <div className="suggested-user-container">
                <Suggesteduser/>
            </div>
        </div>
    )
}

export default Follow