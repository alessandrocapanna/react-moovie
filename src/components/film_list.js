import React from 'react';
import FilmCard from './film_card'

export default function filmList({movies}){
  if (!movies) {
    return null;
  }
   return (
    <div className="row mt-4">
      {
        movies.map( movie => <FilmCard key={movie.imdbID} movie={movie}/>)
      }
   </div>)
}