import React, {useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import SearchBar from '../components/ui/SearchBar'
import Cards from '../components/ui/Cards'
import moviesServices from '../services/movieApi'

function Trending() {
  let dispatch=useDispatch()
    const trendingImg='https://i.pinimg.com/564x/91/48/aa/9148aa2f7d838f1f6e57b3780aac387b.jpg'
    let navigate=useNavigate()

    const trendingMovies=useSelector((state)=>state.movies.trendingMovies)

    useEffect(()=>{
        moviesServices.getMovies().then((res)=>
            console.log('the movies data in trending',res)
            )

        // moviesServices.getSearch().then((res)=>
        //     console.log('search data in trending',res)
        // )
    },[])



  return (
    <div  className='p-[3%] w-screen  h-full overflow-auto '>
        <div className=' w-full flex items-center '>
           <i onClick={()=>{navigate(-1)}} class="ri-arrow-left-line text-zinc-400 font-bold text-2xl mr-4 hover:text-[#6556CD]"></i>
            <h1 className='font-semibold text-2xl text-zinc-400 '>Trending</h1>

            <SearchBar/>
        </div>

        <Cards img={trendingImg} movies={trendingMovies}/>
      
    </div>
  )
}

export default Trending
