import { createContext, useEffect, useState } from 'react'
export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [userPosts, setuserPosts] = useState([])
    const [feed, setfeed] = useState([])
    const [loading, setloading] = useState(false)

    return (
        <PostContext.Provider value={{ userPosts, setuserPosts, feed, setfeed, loading, setloading }}>
            {children}
        </PostContext.Provider>
    )
}
