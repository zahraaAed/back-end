import{ Link } from 'react-router-dom';
const NavBar = () => {
    return(
<header>
    <div className="container">
        <Link to="/home">
            <h1>Home</h1>
        </Link>

        <Link to="/reviews">
            <h1>Reviews</h1>
        </Link>
        <Link to="/about">
            <h1>About Us</h1>
        </Link>


    </div>
</header>
    )
}
export default NavBar;