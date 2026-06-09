import { createContext, useState } from 'react'

export const FollowContext = createContext()

export const FollowProvider = ({ children }) => {

    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [suggestedUsers, setSuggestedUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [suggestedLoading, setSuggestedLoading] = useState(false)

    return (
        <FollowContext.Provider
            value={{
                followers,
                setFollowers,
                following,
                setFollowing,
                suggestedUsers,
                setSuggestedUsers,
                loading,
                setLoading,
                suggestedLoading,
                setSuggestedLoading
            }}>
            {children}
        </FollowContext.Provider>
    )
}