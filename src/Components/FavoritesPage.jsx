import {MovieItem} from './Movies'

const FavoritesPage = (props) => {
    const {moviesList} = props

    const favoritesList = moviesList.filter((item) => item.favorite ? item : null)

    console.log(favoritesList, 'lista de favoritos')

    const displayFavorites = favoritesList.map((item) => <MovieItem id={item.id} key={item.id} image={item.image} title={item.title} description={item.description}/>) 

    return(
        <div className="favorites-container">
            <h2 className="favorites-title">
                List of Favorite&nbsp;<b className="home-bold"> Movies:</b>
            </h2>
            {favoritesList.length > 0 ? (
                <div className="movies-grid">
                    {displayFavorites}
                </div>
            ) : (
                <div className='fail-favorite'>Sorry but it seems that you don't have favorite movies.</div>
            )}
        </div>
    )
}

export default FavoritesPage