import {Link} from "react-router-dom"
const Home =()=>{
    return(
        <div>
            <h1>Home</h1>
            <Link to="counter">Counter</Link>
            <br />
            <Link to="middle">Middle</Link>
            <br />
            <Link to="last">PageENd</Link>
        </div>
    )
}
export default Home;