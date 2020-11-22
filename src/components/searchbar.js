import React,{Component} from 'react';


export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            turn:'back to the future'
        }
    }
    searchChange = (evt) => {
        this.setState({turn : evt.target.value})
        
    }
    searchCliked = (evt) => {
        evt.preventDefault();
        this.props.onSearchTrun(this.state.turn);
    }
    render(){
        return (
            <form className="form-inline">
                       <input className="form-control mr-sm-2" 
                                onChange={this.searchChange}
                                value={this.state.turn} 
                                type="search" 
                                placeholder="cerca il tuo film" 
                                aria-label="Search" 
                        />  
                        <button 
                                onClick = {this.searchCliked}
                                className="btn btn-outline-success my-2 my-sm-0" 
                                type="submit">Search
                        </button>
            </form>
            
        )
    }

}