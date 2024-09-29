import React, { useState, useEffect } from "react";
import SideBar from "../components/ui/SideBar";
import SearchBar from "../components/ui/SearchBar";
import moviesServices from "../services/movieApi";
import { setMovies,setTrendingMovies,setPopularMovies,setTopMovies,setTvShows,setPeople} from "../features/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/ui/Header";
import HorizontalCards from "../components/ui/HorizontalCards";
import DropDown from "../components/ui/DropDown";
import Loading from "../components/ui/Loading";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Home() {
  document.title = "movieApp || Home";
  
  const dispatch=useDispatch();

  const movies=useSelector((state)=>state.movies.movies)
  const trendingMovies=useSelector((state)=>state.movies.trendingMovies)
console.log('✌️trendingMovies --->', trendingMovies);

  const [category,setCategory]=useState('all')

  // useEffect(() => {
  //   moviesServices.getMovies().then((res) => {
  //     console.log("✌️res --->", res);
  //     dispatch(setMovies(res))
  //   });
  // }, []);


  useEffect(()=>{
    moviesServices.getMovies().then((res)=>{
        return(
            
            dispatch( setMovies(res))
        )
    })

    moviesServices.getTrending(category).then((res)=>{

      return(
        dispatch(setTrendingMovies(res.results))
      )
    })
},[setTrendingMovies,category])

useEffect(()=>{
  moviesServices.getPopular().then((res)=>{

    return(
      dispatch(setPopularMovies(res.results))
    )
  })
},[setPopularMovies])

useEffect(()=>{
  moviesServices.getMovies().then((res)=>{

    return(
      dispatch(setTopMovies(res.results))
    )
  })
},[setTopMovies])

useEffect(()=>{
  moviesServices.getTvShows().then((res)=>{

    return(
      dispatch(setTvShows(res.results))
    )
  })
},[setTvShows])

useEffect(()=>{
  moviesServices.getPeople().then((res)=>{

    return(
      dispatch(setPeople(res.results))
    )
  })
},[setPeople])


  return trendingMovies?(
   
      <>
      <SideBar />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <SearchBar />
        <Header/>

        <div className=' flex justify-between w-full  p-5'>
          <h1 className='font-semibold text-3xl text-zinc-400'>Trending</h1>
          <DropDown title={'filter'} options={['all','tv','movie']} func={(e)=>{setCategory(e.target.value)}}/>
        </div>

        <HorizontalCards data={trendingMovies} />
        {/* <img src="https://i.pinimg.com/564x/f7/a3/a8/f7a3a819b9abd49c301bb3daa724869d.jpg" alt="" /> */}

      </div>
    </>
    
    
  ):(
    
    <Loading/>
  )
  
  
}

export default Home;
