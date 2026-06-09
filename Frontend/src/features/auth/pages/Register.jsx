import React from 'react'
import {Link} from 'react-router-dom'
import "../style/form.scss"
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Register = () => {
  const {user, loading, registerHandler} = useAuth()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const formhandle = async(e) => {
    e.preventDefault()
    await registerHandler(username, email, password)
    navigate("/home")
  }
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <main className='auth-main'>
        <div className='form-container'>
            <h2>Register</h2>
            <form onSubmit={formhandle}>
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' name='username' value={username} />
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' name='email' value={email} />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' name='password' value={password} />
                <button type='submit'>Register</button>
            </form>
            <p>Already have an account?<Link to='/'> Sign in.</Link></p>
        </div>
    </main>
  )
}

export default Register