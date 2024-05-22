import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ProfilePage = (props) => {
    const navigate = useNavigate()
    const {isLogged} = props
    const {moviesList} = props

    const favoritesList = moviesList.filter((item) => item.favorite ? item : null)

    useEffect(() => {
        if(isLogged == false){
            navigate('/login')
        }
    }, [isLogged])

    return(
        <div className="profile-container">
            <div>Welcome!</div>
            <h2 className="favorites-title">Your profile:</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="user-image">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <div>User 1</div>
            <div>Favorite Movies: {favoritesList.length}</div>
        </div>
    )
}

export default ProfilePage