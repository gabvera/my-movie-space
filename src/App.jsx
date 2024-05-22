import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import data from './Data'
import './App.css'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Movies from './Components/Movies'
import Footer from './Components/Footer'
import ErrorPage from './Components/ErrorPage'
import ItemPage from './Components/ItemPage'
import FavoritesPage from './Components/FavoritesPage'
import SearchPage from './Components/SearchPage'
import LoginPage from './Components/LoginPage'
import ProfilePage from './Components/ProfilePage'

function App() {
  const [moviesList, setMoviesList] = useState(data)
  const [isLogged, setIsLogged] = useState(false)
  
  const MainPage = (props) => {
    return(
      <div>
        <Home moviesList={moviesList}/>
        <Movies moviesList={moviesList}/>
        <Footer />
      </div>
    )
  }

  function displayMovies(){
    Data.map((item) => <Component id={item.id} image={item.image} title={item.title} subtitle={item.subtitle} director={item.director} description={item.description} year={item.year} favorite={item.favorite} ratings={item.ratings} like={item.like} dislike={item.dislike}/>)
  }

  console.log('State of the list: ', moviesList)

  return (
    <div>
      <Navbar isLogged={isLogged} />
        <Routes>
          <Route path="/" element={<MainPage moviesList={moviesList}/>} />
          {/* <Route path="cart" element={<Cart data={data} currentCart={currentCart} setCurrentCart={setCurrentCart} />} />
          <Route path="/item/:id" element={<Item data={data} setCurrentCart={setCurrentCart} currentCart={currentCart} />} /> */}
          <Route path="/item/:id" element={<ItemPage setMoviesList={setMoviesList} moviesList={moviesList}/>} />
          <Route path="/favorites" element={<FavoritesPage moviesList={moviesList}/>} />
          <Route path='/search' element={<SearchPage moviesList={moviesList}/>}/>
          <Route path='/login' element={<LoginPage setIsLogged={setIsLogged}/>}/>
          <Route path={'/profile'} element={<ProfilePage isLogged={isLogged} moviesList={moviesList}/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </div>
  )
}

export default App
