import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-3'>
        <h1 className='text-2xl text-white font-bold'>
             <i className="text-[#6556CD] ri-clapperboard-fill mr-2"></i>
             <span className=''>Movies</span>
        </h1>
        <nav className='mt-6 flex flex-col gap-1 text-lg  text-zinc-400'>
            <h1 className='text-xl text-white font-bold '>New Feeds</h1>
            <Link to={'/trending'} className=' p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white'>
             <i class="mr-2 ri-fire-fill"></i> Trending
            </Link>
            <Link to={'/popular'} className=' p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white'>
             <i class="mr-2 ri-bard-fill"></i> Populer
            </Link>
            <Link to={'/movies'} className=' p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white'>
                <i class="mr-2 ri-film-fill"></i> Movies
            </Link>
            <Link to={'/tvShows'} className=' p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white'>
                <i class="mr-2  ri-tv-fill"></i> Tv-Shows
            </Link>
            <Link to={'/people'} className=' p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white'>
                <i class="mr-2 ri-team-fill"></i> People
            </Link>
        </nav>

        <nav className='mt-6 flex flex-col gap-1 text-lg text-zinc-400'>
            <h1 className='text-xl text-white font-bold '>Website Information</h1>
            <Link className=' p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white'>
            <i class="mr-2 ri-information-fill"></i> About
            </Link>
            <Link className=' p-3 hover:bg-[#6556CD] duration-300 rounded-lg hover:text-white'>
            <i class="mr-2 ri-contacts-fill"></i> Contact
            </Link>
            
        </nav>
             
    </div>
  )
}

export default SideBar
