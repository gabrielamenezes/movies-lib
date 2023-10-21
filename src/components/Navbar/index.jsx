import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"
import styles from './Navbar.module.css'

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return
    //enviar na query string e pegar esse valor na página de search p/ acessar a api
    navigate(`/search?q=${search}`)
    setSearch('') //limpando o campo
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <h2>
          <Link to="/" className={styles.logo}><BiCameraMovie />MoviesLib</Link>
        </h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Busque um filme"  onChange={(e) => setSearch(e.target.value)} value={search}/> {/*quando alguem digita algo no input, eu mudo o estado do search */}
          <button type="submit"><BiSearchAlt2 /></button>
        </form>
      </div>
      
    </nav>
  )
}

export default Navbar