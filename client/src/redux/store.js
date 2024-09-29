import {configureStore} from '@reduxjs/toolkit'
import moviesSlice from '../features/moviesSlice'

export const store=configureStore({
    reducer:{
        movies:moviesSlice
    }
})