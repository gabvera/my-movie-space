import { Link } from "react-router-dom"

const Navbar = (props) => {
    const {isLogged} = props

    return(
        <div className="navbar">
            <h1>My Movie Space</h1>
            <ul>
                <Link className="navbar-items" to='/'>Movies</Link>
                <Link className="navbar-items" to='/favorites'>Favorites</Link>
                <Link className="navbar-items" to='/search'>Search</Link>
                {isLogged && <Link className="navbar-items" to='/profile'>Profile</Link>}
                {!isLogged && <Link className="navbar-items" to='/login'>Login</Link>}
            </ul>
        </div>
    )
}

export default Navbar