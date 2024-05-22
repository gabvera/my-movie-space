import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const ItemPage = (props) => {
    const { id } = useParams();
    const {moviesList, setMoviesList} = props

    const itemPageMovie = moviesList[id-1]

    function favoriteHandler(){
        setMoviesList(prevList => 
            prevList.map((item) =>
              item.id === itemPageMovie.id ? { ...item, favorite: !item.favorite } : item
            )
        );
    }

    const ItemComponent = () => {
        return(
            <div>
                <div className="item-page">
                        <div className="item-page-container">
                            <div className='item-page-texts'>
                                <h2 className="home-bold">{itemPageMovie.title}</h2>
                                <ul className='item-page-texts-inner'>
                                    <li>{itemPageMovie.year}</li>
                                    <li>{itemPageMovie.director}</li>
                                    <li>{itemPageMovie.ratings}/5</li>
                                </ul>
                                <h5>{itemPageMovie.subtitle}</h5>
                                <div>{itemPageMovie.description}</div>
                                <ul className='item-page-buttons'>
                                    <button onClick={favoriteHandler}>{itemPageMovie.favorite ? 'Remove as Favorite' : 'Add as Favorite'}</button>
                                    <button>Watch Now</button>
                                </ul>
                            </div>
                            <img src={itemPageMovie.image} className='item-page-image' alt="MOVIE IMG" />
                            <div className='item-page-rates'>
                                <div className='likes'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="heart">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                    <div className='item-rates-text'>{itemPageMovie.like}</div>
                                    <div>Like</div>
                                </div>
                                <div className='dislikes'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="thumbs-down">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                                    </svg>
                                    <div className='item-rates-text'>{itemPageMovie.dislike}</div>
                                    <div>Dislike</div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className='item-down-buttons'>
                    <button>Save to Watchlist</button>
                    <button>Write a Review</button>
                </div>
            </div>
       )
    }
    
    return(
       itemPageMovie ? <ItemComponent /> : <ErrorPage/>
    )
}

export default ItemPage