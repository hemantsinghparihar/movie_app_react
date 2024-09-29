import React from 'react'
import { Link } from 'react-router-dom'
import DropDown from './DropDown'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function HorizontalCards(props) {
  const data=props.data
  

  let description='Around the end of the millennium, Viking, the mightiest but atrocious tribe, had been out breaking everywhere. Thorfinn, the son of the greatest warrior, lived his childhood in the battlefield. He was seeking the land of reverie called Vinland. This is the story of a true warrior in an age of turmoil.'

  let fakeArr=[1,2,3,4,5,6,7,8,9]
  return (
  
 <>
 
           {/* card container */}
           <div className='w-[100%]   flex overflow-y-hidden mb-3 px-5 pb-5' >
   
   {/*card  */}
   {data?.map((one,i)=>(
       <div className='min-w-[20%] max-w-[30%] mr-5 mb-1 h-full  flex flex-col bg-zinc-900  rounded-md' key={i}>
       <div className='w-full h-[60%]'>
         <LazyLoadImage className=' h-[100%] w-[100%] object-cover rounded' 
         src={`https://image.tmdb.org/t/p/original/${one.backdrop_path ||one.profile_path}`} alt="" />
       </div>

       <div className='w-full p-1'>
         <h1 className=' text-white text-xl font-semibold  mt-1'>{one.title || one.original_title || one.name || one.original_name}</h1>
         <p className=' text-white mt-2 mb-1 text-xs'>{one.overview.slice(0,80)}...<span   
         className='text-sm text-zinc-500' >more</span></p>
       </div>
      

     </div>

   ))}
                 
       </div>

       <h1>checking something below</h1>
     
 </>
   
  )
}

export default HorizontalCards
