import React from 'react'
import '../style/create.scss'
import Sidebar from '../../shared/components/sidebar/Sidebar'
import Suggesteduser from '../components/suggestedUser/Suggesteduser'
import { useState } from 'react'
import { usePost } from '../hooks/usePost'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const Create = () => {
    const {loading,createPostHandler} = usePost()
    const [caption, setCaption] = useState("")
    const navigate = useNavigate()
    const postImageInputFileRef = useRef(null)
    const formhandler = async(e)=>{
        e.preventDefault()
        const file = postImageInputFileRef.current.files[0]
        await createPostHandler(file,caption)
        navigate("/home")
    }
    if(loading){
        return <h1>Loading....</h1>
    }
    return (
        <div className="create-page">
            <div className='sidebar-container'>
                <Sidebar />
            </div>
            <div className="create-part">
                <form onSubmit={formhandler} className='create-form'>
                    <input ref={postImageInputFileRef}
                        type="file"
                        id="fileInput"
                        hidden
                    />

                    <label htmlFor="fileInput" className="upload-box">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15H5V19H19V15H21ZM13 3V13H16L12 17L8 13H11V3H13Z"></path>
                        </svg>

                        <h2>Select a photo</h2>

                        <p>Drag and drop image here</p>

                        <span>Select from computer</span>

                    </label>
                    <input onChange={(e)=>setCaption(e.target.value)} type="text" placeholder='Enter caption here' name='caption' value={caption} className='caption' />
                    <button className='create-post-button'>Create Post</button>
                </form>
            </div>
            <div className="suggested-user-container">
                <Suggesteduser />
            </div>
        </div>
    )
}

export default Create