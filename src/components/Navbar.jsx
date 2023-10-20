import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav id="navbar">
        <h2>
          <Link to="/">MoviesLib</Link>
        </h2>
        <Link to="/movie/1">Movie 1</Link>
        <Link to="/search">Search</Link>
      </nav>
  )
}

export default Navbar