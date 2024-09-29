import React from 'react';
import load from '../../../public/loader.gif';
import loader from '../../../public/sphere.gif'

function Loading() {
  return (
    // <div
    //   style={{
    //     background:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9))`,
    //     backgroundImage: `url(${load})`,
    //     backgroundSize: 'contain', // Adjusts the size of the background image
    //     backgroundRepeat: 'no-repeat', // Prevents repeating the image
    //     backgroundPosition: 'center', // Centers the image
    //     height: '100vh', // Full viewport height
    //     width: '100%', // Full width
       
    //   }}

    //   className='flex justify-center items-center w-full h'
    // >

    <div style={{background:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.9),rgba(0,0,0,0.12)),url(${load})`, backgroundPosition: 'center',backgroundSize:'cover',display:'flex', justifyContent:'center', width:'100vw',height:'100vh', backgroundRepeat: 'no-repeat',  
       
       
   }} >
     
     
    </div>

  // <div style={{background:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.9),rgba(0,0,0,0.12)),url(${loader})`, backgroundPosition: 'center',backgroundSize:'cover',display:'flex', justifyContent:'center', width:'100vw',height:'100vh', backgroundRepeat: 'no-repeat',  
       
       
  //   }} >
  //     <img src={loader} alt="" />

  // </div>
  );
}

export default Loading;

// import React from 'react'
// import load from '../../../public/loader.gif'

// function Loading() {
//   return (
//     <div>
//       <img style={{backgroundBlendMode: 'screen'}} className='bg-transparent' src={load} alt="" />
//     </div>
//   )
// }

// export default Loading
