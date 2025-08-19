import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AddMovie = ({ setMovies }) => {
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [poster, setPoster] = useState("")
    const navigate = useNavigate()


    const handlePoster = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPoster(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !rating || !poster) {
            alert("Please enter all fields");
            return;
        }

        const newMovie = {
            id: Date.now(),
            title,
            vote_average: rating,
            poster_path: poster,  
        };

        setMovies((prev) => [newMovie, ...prev]);


       navigate ("/")
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10, maxWidth: 400, margin: "20px auto" }}>
            <h2>Add Movie</h2>

            <input
                type="text"
                placeholder="Movie Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="number"
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            />

            <input type="file" accept="image/*" onChange={handlePoster} />

            {poster && <img src={poster} alt="preview" style={{ width: "100px", marginTop: "10px" }} />}

            <button type="submit">Add Movie</button>
        </form>
    );
};



export default AddMovie