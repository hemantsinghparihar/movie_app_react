import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    let description='Around the end of the millennium, Viking, the mightiest but atrocious tribe, had been out breaking everywhere. Thorfinn, the son of the greatest warrior, lived his childhood in the battlefield. He was seeking the land of reverie called Vinland. This is the story of a true warrior in an age of turmoil.'

    let media='movie'
  return (
    <div style={{background:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)),url('https://i.pinimg.com/564x/dc/6e/64/dc6e641c5eb1a3793fab24dc11ac3992.jpg')`, 
       
        backgroundSize:'cover'
    }}
        className='w-[full] h-[70vh] flex flex-col justify-end p-[5%] items-start'
    >
        <h1 className='w-[70%] text-white text-5xl font-bold  '>Vinland Saga</h1>
        <p className='w-[70%] text-white mt-3 mb-3'>{description.slice(0,200)}...<Link   
        className='text-sm text-blue-500' >more</Link></p>

        <p className='text-fuchsia-200 '>
            <i className="text-black ri-megaphone-fill " ></i> release date
            <i className="text-black ri-album-fill ml-5"></i>{ media.toUpperCase()}

        </p>

        <Link className='bg-[#6556CD] text-white p-3 rounded mt-4  '>
            watch Trailer
        </Link>
     
    </div>
  )
}

export default Header
