import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_KEY = import.meta.env.VITE_TMDB_API_KEY;
// const TMDB_KEY = import.meta.env.VITE_APP_TMDB_API_KEY;


const headers = {
      Authorization: `Bearer ${TMDB_KEY}`,
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