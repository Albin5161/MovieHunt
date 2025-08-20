import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddMovie.css"

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
        navigate("/")
    };

    return (

        <div className="add-page">
            <div className="add-card">
                <h2>Add Movie</h2>
                <form onSubmit={handleSubmit} className="add-form">
                    <input
                        type="text"
                        placeholder="Movie Name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="10"
                        placeholder="Rating (0–10)"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />

                    <div className="file-row">
                        <input type="file" accept="image/*" onChange={handlePoster} />
                        {poster && <img src={poster} alt="preview" className="preview" />}
                    </div>

                    <button type="submit" className="submit-btn">Add Movie</button>
                </form>
            </div>
        </div>
    );
};

//         <form onSubmit={handleSubmit}
//             style={{ display: "grid", gap: 10, maxWidth: 400, margin: "20px auto" }}>
//             <h2>Add Movie</h2>

//             <input
//                 type="text"
//                 placeholder="Movie Name"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//             />

//             <input
//                 type="number"
//                 placeholder="Rating"
//                 value={rating}
//                 onChange={(e) => setRating(e.target.value)}
//             />

//             <input type="file" accept="image/*" onChange={handlePoster} />

//             {poster && <img src={poster} alt="preview" style={{ width: "100px", marginTop: "10px" }} />}

//             <button type="submit">Add Movie</button>
//         </form>
//     );
// };



export default AddMovie