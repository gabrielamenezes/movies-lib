import { Link } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <h2>
          <Link to="/" className={styles.logo}><BiCameraMovie />MoviesLib</Link>
        </h2>
        <form>
          <input type="text" placeholder="Busque um filme" />
          <button type="submit"><BiSearchAlt2 /></button>
        </form>
      </div>
      
    </nav>
  )
}

export default Navbar