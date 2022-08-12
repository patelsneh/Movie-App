import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import Movieapi from "../../common/api/Movieapi";
import {APIKey} from "../../common/api/MovieApikey";
import { addMovies } from '../../features/movies/movieSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchMovies= async () =>{
            const movieText= "Harry";
            const response= await Movieapi
            .get(`http://www.omdbapi.com/?apiKey=${APIKey}&s=${movieText}&type=movie`)
            .catch((err)=>{
                console.log(err);
            });
            dispatch(addMovies(response.data)); 
            console.log("Data Received:--",response);
        };
        fetchMovies();
    },[])

    return (
        <div>
        <div className='banner-image'></div>
        <MovieListing/>
        </div>
    );
};
export default Home;