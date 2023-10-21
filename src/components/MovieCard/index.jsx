import styles from './MovieCard.module.css'
import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className={styles.movieCard}>
        <img src={imageUrl + movie.poster_path} alt={`Capa do filme ${movie.title}`} />
        <h2>{movie.title}</h2>
        <p>
            <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`} className={styles.detalhesBtn}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard