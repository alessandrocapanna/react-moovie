
import './App.css';
import React, { Component } from 'react';
import FilmList from './components/film_list';
import NavBar from './components/navbar';

const apiKey = '9a15efad';
const apirUrl = 'http://www.omdbapi.com';

function cercaFilm(search = ''){
  return fetch( apirUrl + '?apikey=' + apiKey + '&s=' + search).then(res => res.json())
}

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      movies : [],
      totalCount : 0

    }
  }
  searchFilm = ( turn = '' ) => { 
    if(turn.length< 3){
      return
    }
    cercaFilm(turn).then( res => {
      this.setState({
        movies : res.Search,
        totalCount: res.totalResult
      })
    })
  }

  componentDidMount(){
    this.searchFilm('back to the future')
  }
  
  render(){
    return (
            <div className="App"> 
            <NavBar onSearchTrun ={this.searchFilm} />
              <div clasa="container">
                  <h2 className="text-center">I miei film</h2>

                    <FilmList  movies={this.state.movies}/>
                    


                   
              </div>
                
            </div>
 
      
    );

  }
}

export default App;
