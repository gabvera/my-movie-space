import React, { useState, lazy, Suspense } from "react";
import {Route, Routes, useLocation} from 'react-router-dom'
import { SwitchTransition, CSSTransition } from "react-transition-group";
import data from './Data'
import './App.css'


import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Movies from './Components/Movies'
import Footer from './Components/Footer'

const ErrorPage = lazy(() => import('./Components/ErrorPage'))
const ItemPage = lazy(() => import('./Components/ItemPage'))
const SearchPage = lazy(() => import('./Components/SearchPage'))
const FavoritesPage = lazy(() => import('./Components/FavoritesPage'))
const LoginPage = lazy(() => import('./Components/LoginPage'))
const ProfilePage = lazy(() => import('./Components/ProfilePage'))


function App() {
  const [moviesList, setMoviesList] = useState(data)
  const [isLogged, setIsLogged] = useState(false)
  const location = useLocation()
  
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

  const MyApp = () => {
    return(
      <div>
       <Navbar isLogged={isLogged} />
        <Routes Location={location}>
            <Route path="/" element={<MainPage moviesList={moviesList}/>} />
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

  return (
    <div>
      <SwitchTransition component={null}>
        <CSSTransition classNames='fade' timeout={300} unmountOnExit key={location.pathname}>
          <Suspense fallback={() => <h2>Loading...</h2>}>
            <MyApp />
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default App
