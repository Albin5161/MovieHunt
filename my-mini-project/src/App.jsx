import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./assets/Components/Homepage";
import ErrorPage from "./assets/Components/ErrorPage";
import MovieDetails from "./assets/Components/MovieDetails";
import AddMovie from "./assets/Components/AddMovie";


function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=250ed723eaef027cc62a3b65bd1bfcb1`)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err))
  }, [])


  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element ={<Homepage movies={movies} />} />
      <Route path = "/movie/:id" element ={<MovieDetails/>} />
      <Route path ="/*" element ={<ErrorPage/>} />
      <Route path ="/add-movie" element= {<AddMovie setMovies={setMovies}/>} />
    
    </Routes>
    </BrowserRouter>
  )
}


export default App;