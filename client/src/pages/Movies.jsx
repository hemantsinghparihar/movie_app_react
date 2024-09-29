import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import SearchBar from '../components/ui/SearchBar'
import Cards from '../components/ui/Cards'
import { useSelector } from 'react-redux'

function Movies() {
     let navigate=useNavigate()
    const moviesImg='https://m.media-amazon.com/images/S/pv-target-images/11095549abddba86af55c6837ed023553dc69533a3e8b543990dfb4dd1d151e0.jpg'

    const topMovies=useSelector((state)=>state.movies.topMovies)

  return (
    <div className='p-[3%] w-screen  h-full overflow-auto'>
    <div className=' w-full flex items-center '>
       <i onClick={()=>{navigate(-1)}} class="ri-arrow-left-line text-zinc-400 font-bold text-2xl mr-4 hover:text-[#6556CD]"></i>
        <h1 className='font-semibold text-2xl text-zinc-400 '>Movies</h1>

        <SearchBar/>
    </div>

    <Cards img={moviesImg} movies={topMovies}/>
  
    </div>
  )
}

export default Movies
