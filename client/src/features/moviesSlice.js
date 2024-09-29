import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        movies:[],
        searchMovies:[],
        query:'',
        trendingMovies:null,
        popularMovies:null,
        topMovies:null,
        tvShows:null,
        people:null
    },

    reducers:{
        setMovies:(state,action)=>{
            state.movies=action.payload
        },
        setSearchMovies:(state,action)=>{
            state.searchMovies=action.payload
           },
        setQuery:(state,action)=>{
            state.query=action.payload
        },
        setTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload
        },
        setPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        setTopMovies:(state,action)=>{
            state.topMovies=action.payload
        },
        setTvShows:(state,action)=>{
            state.tvShows=action.payload
        },
        setPeople:(state,action)=>{
            state.people=action.payload
        }
    }

})

export const {setMovies,setSearchMovies,setQuery,setTrendingMovies,setPopularMovies,setTopMovies,setTvShows,setPeople}=moviesSlice.actions
export default moviesSlice.reducer