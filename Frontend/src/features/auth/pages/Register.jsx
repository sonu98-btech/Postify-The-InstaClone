import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import "../style/form.scss"
import {useAuth} from '../hooks/useAuth'
import {useState} from 'react'

const Register = () => {

    const {
        loading,
        registerHandler
    } = useAuth()

    const [name,setName]
    = useState("")

    const [username,setUsername]
    = useState("")

    const [email,setEmail]
    = useState("")

    const [password,setPassword]
    = useState("")

    const [bio,setBio]
    = useState("")

    const navigate =
    useNavigate()

    const formhandle =
    async(e)=>{

        e.preventDefault()

        await registerHandler(
            name,
            username,
            email,
            password,
            bio
        )

        navigate("/home")
    }

    if(loading){
        return <div>Loading...</div>
    }

    return (
        <main className='auth-main'>

            <div className='form-container'>

                <h2>
                    Create Account
                </h2>

                <p className='sub-heading'>
                    Join Postify today
                </p>

                <form
                onSubmit={formhandle}>

                    <input
                    type="text"
                    placeholder='Full Name'
                    value={name}
                    onChange={(e)=>
                        setName(
                            e.target.value
                        )
                    }
                    />

                    <input
                    type="text"
                    placeholder='Username'
                    value={username}
                    onChange={(e)=>
                        setUsername(
                            e.target.value
                        )
                    }
                    />

                    <input
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e)=>
                        setEmail(
                            e.target.value
                        )
                    }
                    />

                    <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e)=>
                        setPassword(
                            e.target.value
                        )
                    }
                    />

                    <textarea
                    placeholder='Write bio...'
                    value={bio}
                    onChange={(e)=>
                        setBio(
                            e.target.value
                        )
                    }
                    />

                    <button
                    type='submit'>
                        Create Account
                    </button>

                </form>

                <p>
                    Already have an account?
                    <Link to='/'>
                        {" "}Sign in
                    </Link>
                </p>

            </div>

        </main>
    )
}

export default Register