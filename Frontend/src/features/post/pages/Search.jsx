import React from 'react'
import Sidebar from '../../shared/components/sidebar/Sidebar'
import '../style/search.scss'
import Suggesteduser from '../components/suggestedUser/Suggesteduser'
const Search = () => {
    return (
        <div className="search-page">
            <div className='sidebar-container'>
                <Sidebar />
            </div>
            <div className="search-part">

                <div className="search-header">
                    <h2>Search</h2>

                    <div className="search-input-container">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M10.5 3C14.6421 3 18 6.35786 18 10.5C18 12.2859 17.3761 13.9259 16.3349 15.2138L20.5607 19.4393L19.4393 20.5607L15.2138 16.3349C13.9259 17.3761 12.2859 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3ZM10.5 4.5C7.18629 4.5 4.5 7.18629 4.5 10.5C4.5 13.8137 7.18629 16.5 10.5 16.5C13.8137 16.5 16.5 13.8137 16.5 10.5C16.5 7.18629 13.8137 4.5 10.5 4.5Z"></path>
                        </svg>

                        <input
                            type="text"
                            placeholder="Search users..."
                        />
                    </div>
                </div>

                <div className="search-results">

                    <div className="user-card">
                        <img
                            src="https://ik.imagekit.io/yuhb2zywe/default-image.jpg?updatedAt=1779106171889"
                            alt=""
                        />

                        <div className="user-info">
                            <p className="username">username</p>
                            <p className="name">Sonu Kumar</p>
                        </div>
                    </div>

                    <div className="user-card">
                        <img
                            src="https://ik.imagekit.io/yuhb2zywe/default-image.jpg?updatedAt=1779106171889"
                            alt=""
                        />

                        <div className="user-info">
                            <p className="username">vishal</p>
                            <p className="name">Vishal</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="suggested-user-container">
                <Suggesteduser />
            </div>
        </div>
    )
}

export default Search