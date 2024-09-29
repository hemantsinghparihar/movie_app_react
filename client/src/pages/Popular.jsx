import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import SearchBar from '../components/ui/SearchBar'
import Cards from '../components/ui/Cards'
import { useSelector,useDispatch } from 'react-redux'

function Popular() {
  let dispatch=useDispatch()
    let navigate=useNavigate()
    const popularImg='https://i.pinimg.com/564x/42/c0/97/42c097db53fbd8e1e85cf5a95f1c1b5a.jpg'

    const popularMovies=useSelector((state)=>state.movies.popularMovies)
  return (
    <div className='p-[3%] w-screen  h-full overflow-auto'>
    <div className=' w-full flex items-center '>
       <i onClick={()=>{navigate(-1)}} class="ri-arrow-left-line text-zinc-400 font-bold text-2xl mr-4 hover:text-[#6556CD]"></i>
        <h1 className='font-semibold text-2xl text-zinc-400 '>Popular</h1>

        <SearchBar/>
    </div>

    <Cards img={popularImg} movies={popularMovies}/>
  
</div>
  )
}

export default Popular
