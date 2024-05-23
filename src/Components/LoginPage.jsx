import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginPage = (props) => {
    const {setIsLogged} = props
    const navigate = useNavigate()

    const [inputValues, setInputValues] = useState({username: '', password: ''})
    const [noUserFound, setNoUserFound] = useState(false)

    const loginData = {
        username: 'test',
        password: 123
    }

    const handleInputChange = (event) => {
        setNoUserFound(prevValue => false)
        setInputValues((prevValue) => ({
            ...prevValue,
            [event.target.id]: event.target.value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(inputValues.username == loginData.username && inputValues.password == loginData.password){
            navigate(`/`)
            setIsLogged(true)
        }else{
            setNoUserFound(prevValue => true)
        }
    }

    return(
        <div className="favorites-container">
            <h2 className="favorites-title">
                Login:
            </h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <br/>
                <input type="text"  onChange={handleInputChange} id="username" />
                <br/>
                <label htmlFor="password">Password:</label>
                <br/>
                <input type="password" onChange={handleInputChange} id="password"/>
                <br/>
                <button className="submit-login">Submit</button>
            </form>
            {noUserFound && <div className="no-movie-found">No User Found!</div>}
        </div>
    )
}

export default LoginPage