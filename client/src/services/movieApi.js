import axios from "axios";

// const baseUrl='http://localhost:3001/'
const baseUrl2='https://api.themoviedb.org/3/'


const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': null, 
      Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODYzN2I2NWVlMDg1YmVlNzJjYWQ5MThkNzlmZmEwMCIsIm5iZiI6MTcyNzM2Mjg2Mi4zMzY5OTIsInN1YiI6IjY2ZjQ1NjYyNzQwMTM4NjQxZTZhMjMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4pxaqXWDLJP6_9qQaLucXqVcI-VIM6l5lTJwn7VDmSM'
    },
  });


  const fetchData = async (endpoint) => {
    try {
    const response = await instance.get(`${endpoint}/api_key=18637b65ee085bee72cad918d79ffa00`);
      return response.data;
    } catch (error) {
      // Handle error
      console.error(`Error fetching data from ${endpoint}:`, error);
      throw error;
    }
  };

  const fetchSearchData = async (endpoint) => {
    try {
    const response = await instance.get(`${endpoint}`);
      return response.data;
    } catch (error) {
      // Handle error
      console.error(`Error fetching data from ${endpoint}:`, error);
      throw error;
    }
  };



// const getMovies=async()=>{
//     const response=await axios.get(`${baseUrl}response`);
//     console.log('✌️response.data --->', response.data);
//     return response.data

// }

// const moviesServices={
//     getMovies
// }

// export default moviesServices

const moviesServices = {
    getMovies: () => fetchData('/discover/movie?'),
    getSearch:(query) =>fetchSearchData(`/search/multi?query=${query}`),
    getTrending:(category)=>fetchData( `/trending/${category}/day?`),
    getPopular:()=>fetchData(`/tv/popular?`),
    getMovies:()=>fetchData(`/movie/top_rated?`),
    getTvShows:()=>fetchData(`/tv/top_rated?`),
    getPeople:()=>fetchData(`/trending/person/day?`)

    
  };
  
  export default moviesServices;
