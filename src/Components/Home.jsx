import { useNavigate } from "react-router-dom"

const Home = (props) => {
    const {moviesList} = props
    const navigate = useNavigate()

    return(
        <div className="home">
            <div className="home-text">
                <h2>Find <b className="home-bold">Movies</b> to Watch</h2>
                <div className="home-subtitle">Personalized suggestions & discovered through the things you already love</div>
            </div>
            <div>
                <h3 className="home-bold">Popular movies:</h3>
                <div className="movie-cards-container">
                    <div className="movie-card" onClick={() => navigate(`/item/${moviesList[0].id}`)}>
                        <img src={moviesList[0].image} alt="IMG" className="movie-card-image" />
                        <div className="movie-card-texts">
                                <div className="home-bold">MOVIES</div>
                                <div>{moviesList[0].title}</div>
                                <div className='movie-card-year'>{moviesList[0].year}</div>
                        </div>
                    </div>
                    <div className="movie-card" onClick={() => navigate(`/item/${moviesList[1].id}`)}>
                        <img src={moviesList[1].image} alt="IMG" className="movie-card-image" />
                        <div className="movie-card-texts">
                            <div className="home-bold">MOVIES</div>
                            <div>{moviesList[1].title}</div>
                            <div className='movie-card-year'>{moviesList[1].year}</div>
                        </div>
                    </div>
                    <div className="movie-card" onClick={() => navigate(`/item/${moviesList[2].id}`)} >
                        <img src={moviesList[2].image} alt="IMG" className="movie-card-image" />
                            <div className="movie-card-texts">
                                <div className="home-bold">MOVIES</div>
                                <div>{moviesList[2].title}</div>
                                <div className='movie-card-year'>{moviesList[2].year}</div>
                            </div>
                        </div>
                    <div className="movie-card" onClick={() => navigate(`/item/${moviesList[3].id}`)}>
                        <img src={moviesList[3].image} alt="IMG" className="movie-card-image" />
                            <div className="movie-card-texts">
                                <div className="home-bold">MOVIES</div>
                                <div>{moviesList[3].title}</div>
                                <div className='movie-card-year'>{moviesList[3].year}</div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Home