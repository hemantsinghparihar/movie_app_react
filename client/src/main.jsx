import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import Trending from './pages/Trending.jsx'
import Popular from './pages/Popular.jsx'
import Movies from './pages/Movies.jsx'
import TvShows from './pages/TvShows.jsx'
import People from './pages/People.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/trending' element={<Trending/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/tvShows' element={<TvShows/>}/>
      <Route path='/people' element={<People/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
     
    
  </StrictMode>,
)
