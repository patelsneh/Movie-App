import { createSlice } from "@reduxjs/toolkit";
const initialState={
    movies:{}
}
const moviesclice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state, {payload})=>{
            state.movies=payload;
        },
    },
});
export const {addMovies}=moviesclice.actions;
export const getAllMovies=(state)=>state.movies.movies; 
export default moviesclice.reducer;