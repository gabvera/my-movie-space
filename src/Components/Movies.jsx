import { useNavigate } from "react-router-dom"


export const MovieItem = (props) => {
    const navigate = useNavigate()
    
    return(
        <div className="movie-item">
            <img onClick={() => navigate(`/item/${props.id}`)} src={props.image} alt="MOVIE IMG" className="movie-item-image"/>
            <div className="home-bold">MOVIES</div>
            <div className="movie-item-title">{props.title}</div>
            <div className="movie-item-desc">{props.description.length > 100 ? props.description.slice(0, 100) + "..." : props.description}</div>
        </div>
    )
}

const Movies = (props) => {
    const {moviesList} = props

    const displayMovies = moviesList.map((item) => <MovieItem id={item.id} key={item.id} image={item.image} title={item.title} description={item.description}/>) 

    return(
        <div className="movies">
            <h2>All Movies:</h2>
                <div className="movies-grid">
                    {displayMovies}
                </div>
            </div>
    )
}

export default Movies