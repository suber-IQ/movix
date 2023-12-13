import axios from "axios";

const BASE_URL = "http://api.themoviedb.org/3";

// const TMDB_KEY = import.meta.env.VITE_TMDB_API_KEY;
// const TMDB_KEY = import.meta.env.VITE_APP_TMDB_API_KEY;
// const TMDB_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWUzYjg4MzU2OGYxOWQ1YzFlODYxZDU3ZjAwNDNiMiIsInN1YiI6IjYxZGZmYTVlOTBiODdlMDA2ZDA5NDhlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9977sdQCF016EoSrjJAnHqASttkaO1fklE1krTvRRFU';


const headers = {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWUzYjg4MzU2OGYxOWQ1YzFlODYxZDU3ZjAwNDNiMiIsInN1YiI6IjYxZGZmYTVlOTBiODdlMDA2ZDA5NDhlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9977sdQCF016EoSrjJAnHqASttkaO1fklE1krTvRRFU`,
}

export const fetchDataFromApi = async (url,params) => {
   try {
       const { data } = await axios.get(BASE_URL+url,{
            headers,
            params
       });
       return data;
   } catch (error) {
      // console.log(error);
      return error;
   }
}