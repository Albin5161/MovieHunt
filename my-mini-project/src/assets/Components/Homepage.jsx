
import "./Homepage.css"
import { useState } from "react"
import { Link } from "react-router-dom"



const HomePage = ({ movies }) => {

    const [searchMovie, setSearchMovie] = useState("")

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchMovie.toLowerCase())
    )

    return (

        <div className="homepage-container">

            <input
                type="text"
                placeholder="Seach movies here..."
                className="seach-bar"
                value={searchMovie}
                onChange={(e) => setSearchMovie(e.target.value)}
            />
            <Link to="/add-movie">
                <button>+ Add Movie</button>
            </Link>
            <h1 className="heading">MovieHunt</h1>

            <div className="movie-container">
                {filteredMovies.map((movie) => (

                    <div className="movie-card" key={movie.id}>
    

                        <img
                            src={movie.poster_path.startsWith("blob:")
                                ? movie.poster_path
                                : `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                            }
                            alt={movie.title}
                        />
                        <h3>{movie.title}</h3>
                        <p>⭐ {movie.vote_average}</p>
                        <Link to={`/movie/${movie.id}`} state={{ movie }}>
                            <button>Movie Details</button>
                        </Link>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default HomePage;