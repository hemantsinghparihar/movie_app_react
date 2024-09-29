import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { setMovies, setSearchMovies,setQuery} from '../../features/moviesSlice'
import moviesServices from '../../services/movieApi';

function SearchBar() {
  const dispatch=useDispatch()
    // const [query,setQuery]=useState('')
    const [searchResults,setSearchResults]=useState([])
    const query=useSelector((state)=>state.movies.query)
    const movies=useSelector((state)=>state.movies.movies)
console.log('✌️moviesData in search component --->', movies);
const searchMovies=useSelector((state)=>state.movies.searchMovies)
console.log('✌️searchMovies --->', searchMovies);

// useEffect(() => {
//   moviesServices.getMovies().then((res) => {
//     console.log("✌️res --->", res);
//     dispatch(setMovies(res))
//   });
// }, []);

useEffect(() => {
  moviesServices.getSearch(query).then((res) => {
    console.log('✌️res the search api response--->', res);
    setSearchResults(res.results);
  });
}, [query]);




    const handleSearchInput=(e)=>{
      let input=e.target.value
        dispatch(setQuery(input))

        // const filteredMovies=movies?.results?.filter((movie)=>{
        //   return  movie.title.toLowerCase().includes(input.toLowerCase())
        // }         
        // )
        // console.log('✌️filteredMovies  --->', filteredMovies);
        // dispatch(setSearchMovies(filteredMovies))

        // if(input===''){
        //   // setFilteredNotes([])
        //      dispatch(setSearchMovies([]))
        //  }
        //  else{
        //   // setFilteredNotes(filtered)
        //   // dispatch(setSearchMovies(filteredMovies))
        //   dispatch(setSearchMovies(searchResults))
        //  }


    }

    const handleQuery=()=>{
      dispatch(setQuery(''))
      dispatch(setSearchMovies([]))
    }

    // const handleSearchInput = (e) => {
    //   let input = e.target.value;
    //   dispatch(setQuery(input));
    
    //   // Check if movies.results exists and is an array
    //   if (movies && movies.results) {
    //     const searchMoviesFilter = movies.results.filter(movie =>
    //       movie.title.toLowerCase().includes(input.toLowerCase())
    //     );
    //     console.log('✌️searchMoviesFilter in search bar comp--->', searchMoviesFilter);
    //     dispatch(setSearchMovies(searchMoviesFilter));
    //   }
    // };


  return (
    <div className='w-full h-[10vh] flex ml-[20%] items-center relative'>
      <i className="text-zinc-400 font-bold text-3xl ri-search-line"></i>

      <input
      onChange={(e)=>{handleSearchInput(e)} }
       type="text" 
       placeholder='search...' 
       value={query}
       className='w-[50%] p-1 text-zinc-200 text-xl mx-10  bg-transparent outline-none border-none' />
       
       {query.length>0 &&
        <i onClick={()=>{handleQuery()}} class="font-bold text-zinc-400 text-3xl ri-close-line"></i>
       }

      {searchResults.length>0 && query.length>0 && (

  <div className='max-h-[50vh] bg-zinc-200 w-[60%] absolute top-[100%] overflow-auto rounded '>
    {searchResults.map((movie,index)=>(
       <Link key={index} className='hover:text-black hover:bg-zinc-400 font-semibold duration-300 text-zinc-600 border-b-zinc-100 border-b-2 p-5 flex justify-start items-center  '>
       {/* <img
       className='w-[10vh] h-[10vh] object-cover mr-5 rounded shadow-lg'
       src={movie.poster_path} alt="" /> */}
       <img
       className='w-[10vh] h-[10vh] object-cover mr-5 rounded shadow-lg'
       src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />

       <span>{movie.title || movie.original_title || movie.name || movie.original_name}</span>
      </Link>
    ))}    

  </div>
      )
        
      }

      {/* <div className='h-[50vh] bg-zinc-200 w-[60%] absolute top-[100%] overflow-auto rounded '>
        <Link className='hover:text-black hover:bg-zinc-400 font-semibold duration-300 text-zinc-600 border-b-zinc-100 border-b-2 p-5 flex justify-start items-center  '>
            <img src="" alt="" />
            <span>hello search</span>
        </Link>

        <Link className='hover:text-black hover:bg-zinc-400 font-semibold duration-300 text-zinc-600 border-b-zinc-100 border-b-2 p-5 flex justify-start items-center  '>
            <img src="" alt="" />
            <span>hello search</span>
        </Link>
       


      </div> */}
      
    </div>
  )
}

export default SearchBar
