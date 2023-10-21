import { useState, useEffect } from "react"

{/*pegando variáveis do .env no vite */}
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async(url) => {
    const res = await fetch(url)
    const data = await res.json();
    setTopMovies(data.results)
  }
  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
    getTopRatedMovies(topRatedUrl)
  }, [])
  return (
    <div>
      Home
    </div>
  )
}

export default Home