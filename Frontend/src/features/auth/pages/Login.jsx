import React from 'react'
import {Link} from 'react-router-dom'
import "../style/form.scss"
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Login = () => {
  const {user, loading, loginHandler} = useAuth()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const formhandle = async(e) => {
    e.preventDefault()
    await loginHandler(username, password)
    navigate("/home")
  }
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <main className='auth-main' >
        <div className='form-container'>
            <h2>Login</h2>
            <form onSubmit={formhandle}>
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' name='username' value={username} />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' name='password' value={password}/>
                <button type='submit'>Login</button>
            </form>
            <p>Don't have account?<Link to='/register'> Sign up.</Link></p>
        </div>
    </main>
  )
}

export default Login