import { useLocation, useNavigate } from "react-router-dom"
import "./MovieDetails.css"

const MovieDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const movie = location.state && location.state.movie;

    if (!movie) return <h2>No movie data found</h2>

    const trailers ={
        755898:"https://www.youtube.com/watch?v=d9erkpdh5o0", 
        1061474 :"https://www.youtube.com/watch?v=y2dfTxk58mg",
    }

    return (
        <div className="movie-details-background"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,

            }}
        >
            <div className="movie-details-container">
                <h1>{movie.title}</h1>

                {trailers[movie.id] &&(
                    <iframe 
                    width="560"
                    height="315"
                    // src={`https://www.youtube.com/embed/${movie.trailerId}`}
                    src= {trailers[movie.id].replace("watch?v=","embed/")}
                    title={`${movie.title}Trailer`}
                    frameBorder ="0"
                    allow="accelerometer ; autoplay ; clipborad-write ; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>

                    </iframe>
                )}
                {/* <img */}
                    {/* src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} */}
                    {/* // alt={movie.title} /> */}

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