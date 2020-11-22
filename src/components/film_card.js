import React from 'react';

export default function filmCard({movie}){
   return (
     
        <div className="col-md-4">
            
            <div className="profile-card-2">
                <img className="img img-responsive" src={movie.Poster} alt="Card image cap"/>
                
                <div className="profile-name">{movie.Title}</div>
                <div className="profile-username">{movie.Year}</div>
                <div className="profile-icons"><button className="btn btn-primary">info dettagli</button></div>
            </div>
        </div>
     
    )
}