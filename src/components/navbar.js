import React,{Component} from 'react';
import SearchBar from './searchbar';




export default function  NavBar({onSearchTrun}){
    

        return (
            <nav className="navbar navbar-light bg-dark justify-content-between fixed-top">
                <a className="navbar-brand">Navbar</a>             
                <SearchBar onSearchTrun = {onSearchTrun}/>
            </nav>)


}