import {Link} from "react-router-dom"
import "./ErrorPage.css"



const ErrorPage=() =>{
    return(
        <div className="ErrorPage">
            <h1>404</h1>
            <p>The page youo're looking for doesn't exist.</p>
            <Link to = "/">
            <button>Go Home</button>
            </Link>

        </div>
    )
    
}

export default ErrorPage