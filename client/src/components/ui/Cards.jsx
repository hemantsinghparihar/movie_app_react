import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Cards(props) {
    const img=props.img
    const movies=props.movies
    let fakeArr=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  return (
    <div className='flex flex-wrap w-[full] mt-5  pl-15 border-solid border-white ml-[5.5%]' >
      {movies?.map(one=>(
        <Link className='w-[15vw] mr-[8%] mb-[5%]  flex flex-col  '>
            <LazyLoadImage src={`https://image.tmdb.org/t/p/original/${one.backdrop_path ||one.profile_path}`} 
                alt="" 
                className='h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,1)]'
            />
            <h1 className='text-2xl text-zinc-300 mt-3 font-semibold'>{one.title || one.original_title || one.name || one.original_name}</h1>

        </Link>
      ))}
    </div>
  )
}

export default Cards










// import React from 'react'
// import { Link } from 'react-router-dom'

// function Cards(props) {
//     const img=props.img
//     const movies=props.trendingMovies
//     let fakeArr=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
//   return (
//     <div className='flex flex-wrap w-[full] mt-5  ' style={{marginLeft:'auto',marginRight:'auto'}}>
//       {fakeArr.map(one=>(
//         <Link className='w-[15vw] mr-[8%] mb-[5%]  flex flex-col  '>
//             <img src={img} alt="" 
//                 className='h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,1)]'
//             />
//             <h1 className='text-2xl text-zinc-300 mt-3 font-semibold'>title</h1>

//         </Link>
//       ))}
//     </div>
//   )
// }

// export default Cards
