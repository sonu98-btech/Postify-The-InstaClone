import React, { useEffect } from 'react'
import './suggestedUser.scss'
import { useFollow } from '../../../follow/hooks/use.follow'

const Suggesteduser = () => {
    const {
        suggestedUsers,
        suggestedLoading,
        getSuggestedUsersHandler,
        followUserHandler
    } = useFollow()

    useEffect(() => {
        getSuggestedUsersHandler()
    }, [])

    const handleFollowClick = async (userId) => {
        try {
            await followUserHandler(userId)
            // Refetch suggestions after following
            await getSuggestedUsersHandler()
        } catch (error) {
            console.error("Error following user:", error)
        }
    }

    return (
        <div className='suggestedUser-container'>
            <p className='para'>Suggestions for you</p>

            {suggestedLoading && (
                <p className='suggested-loading'>Loading suggestions...</p>
            )}

            {!suggestedLoading && suggestedUsers?.length > 0 && (
                suggestedUsers.map((user) => (
                    <div key={user._id} className="suggestedUser">
                        <div>
                            <button className='img-button'>
                                <img
                                    src={user?.profilePicture}
                                    alt=""
                                />
                            </button>
                            <p>{user?.username}</p>
                        </div>

                        <button
                            className='follow-button'
                            onClick={() => handleFollowClick(user._id)}
                        >
                            Follow
                        </button>
                    </div>
                ))
            )}
        </div>
    )
}

export default Suggesteduser