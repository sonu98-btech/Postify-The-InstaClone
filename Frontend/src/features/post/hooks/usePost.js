import { PostContext } from "../postContext";
import { useContext } from "react";
import {getUserPost,getAllFeedPost,createPost} from "../services/post.api";

export const  usePost=()=>{
    const {userPosts,setuserPosts,feed,setfeed,loading,setloading} = useContext(PostContext)
    const getUserPostHandler = async ()=>{
        setloading(true)
        const data = await getUserPost() 
        setuserPosts(data.posts)
        setloading(false)
    }
    const getAllFeedPostHandler = async()=>{
        setloading(true)
        const data = await getAllFeedPost()
        setfeed(data.posts)
        setloading(false)
    }
    const createPostHandler = async (image,caption)=>{
        setloading(true)
        const data = await createPost(image,caption)
        setfeed([data.post, ...feed])
        setloading(false)
    }
    return{
        userPosts,feed,loading,getAllFeedPostHandler,getUserPostHandler,createPostHandler
    }
}