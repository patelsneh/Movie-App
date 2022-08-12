import './App.scss';
import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom"
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
function App() {
  return (
   <div>
     <Header/>
     <div className='container'>
     <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/movie/:imdbID" element={<MovieDetails></MovieDetails>}/>
      <Route element={<PageNotFound></PageNotFound>}/>
      </Routes>
      </div>
      <Footer/>
   </div>

  );
}

export default App;
