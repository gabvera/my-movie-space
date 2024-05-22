import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchPage = (props) => {
    const navigate = useNavigate()
    const {moviesList} = props
    const [searchValue, setSearchValue] = useState('')
    const [noItemFound, setNoItemFound] = useState(false)

    const handleInputChange = (event) => {
        setSearchValue(prevValue => event.target.value);
        setNoItemFound(prevValue => false)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const filteredList = moviesList.filter((item) => item.title.toLowerCase() == searchValue.toLowerCase() ? item : null)
        if(filteredList[0]){
            navigate(`/item/${filteredList[0].id}`)  
        }else{
            setNoItemFound(prevValue => true)
        }
    };

    return(
        <div className="favorites-container">
            <h2 className="favorites-title">
                Search your&nbsp;<b className="home-bold"> Movie:</b>
            </h2>
            <form action="" onSubmit={event => handleSubmit(event)}>
                <input type="text" className="search-bar" onChange={handleInputChange} value={searchValue}/>
                <button type="submit" className="submit-favorite">
                    Go to Movie
                </button> 
            </form>
            {noItemFound && <div className="no-movie-found">No Movie Found!</div>}
        </div>
    )
}

export default SearchPage