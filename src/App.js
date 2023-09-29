import React, {useEffect, useState} from "react";
import './App.css'
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg'
// api key=ad53c9b


const API_URL='http://www.omdbapi.com?apikey=ad53c9b';
const movie1={
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}


const App=()=>{
    const [movies,setMovies]=useState([])
    const [searchTerm,setSearchTerm]=useState('');


    const searchMovies=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`)

        const data=await response.json();

        setMovies(data.Search)
        console.log(data.Search)
    }

    useEffect(()=>{
        searchMovies('')
    },[])



    return (
        <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt="Search"
                onClick={()=>searchMovies(searchTerm)}
                />
            </div>


            <div className="aside">
                <div className="offcanvas">
                    <div className="offcanvas-header">
                      <h4>Filmpire</h4>  

                    </div>  
                    <div className="offcanvas-body">
                        <div className="categories">
                            <h5>Categories</h5>
                            <ul className="categories-list">
                                <li className="cat">Popular</li>
                                <li className="cat">Top Rated</li>
                                <li className="cat">Upcoming</li>
                            </ul>
                        </div>
                        <div className="genres">
                            <h5>Genres</h5>
                            <ul className="genres-list">
                                <li className="genre">Action</li>
                                <li className="genre">Adventure</li>
                                <li className="genre">Animation</li>
                                <li className="genre">Comedy</li>
                                <li className="genre">Crime</li>
                                <li className="genre">Documentary</li>
                                <li className="genre">Drama</li>
                                <li className="genre">Family</li>
                                <li className="genre">Fantasy</li>
                                <li className="genre">History</li>
                                <li className="genre">Horror</li>
                                <li className="genre">Music</li>
                                <li className="genre">Mystery</li>
                                <li className="genre">Romance</li>
                                <li className="genre">Science Fiction</li>
                                <li className="genre">TV Movie</li>
                                <li className="genre">Thriller</li>
                                <li className="genre">War</li>
                                <li className="genre">Western</li>
                            </ul>
                        </div>
                    </div>  
                </div>   
            </div>
            {
                movies?.length>0
                ?(
                <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie={movie}/>
                    ))}
                </div>

                ):(
                    <div className="empty">
                    <h2>No movies found</h2>     
                    </div>
                )
            }
        </div>
    );
}

export default App;