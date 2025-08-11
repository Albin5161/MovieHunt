import { useLocation, useNavigate } from "react-router-dom"
import "./MovieDetails.css"

const MovieDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const movie = location.state && location.state.movie;

    if (!movie) return <h2>No movie data found</h2>

    return (
        <div className="movie-details-background"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,

            }}
        >
            <div className="movie-details-container">
                <h1>{movie.title}</h1>
                <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title} />

                <p>{movie.overview}</p>
                <p>Release Date: {movie.release_date}</p>
                <p>⭐ {movie.vote_average}</p>
                <button className="button"
                    onClick={() => navigate(-1)}>
                    ⬅ Go Back
                </button>
            </div>
            
        </div>
    )
}


            export default MovieDetails