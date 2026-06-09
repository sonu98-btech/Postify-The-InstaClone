import { useContext } from "react";
import { AuthContext } from "../authContext";
import {loginUser, registerUser} from "../services/auth.api";

export const useAuth=()=>{
    const {user, setUser, loading, setLoading} = useContext(AuthContext)
    const loginHandler = async (username, password)=>{
        setLoading(true)
        const data = await loginUser(username, password)
        setUser(data.user)
        setLoading(false)
    }
    const registerHandler = async (username, email, password)=>{
        setLoading(true)
        const data = await registerUser(username, email, password)
        setUser(data.user)
        setLoading(false)
    }
    const getMeHandler = async ()=>{
        setLoading(true)
        const data = await getMe()
        setUser(data.user)
        setLoading(false)
    }
    return {user, loading, loginHandler, registerHandler, getMeHandler}
}