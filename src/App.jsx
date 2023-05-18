import './App.css'
import withAnswer from './mocks/answer.json'
import withoutAnswer from './mocks/no-answer.json'

export default function App () {

  const movies = withAnswer.Search
  const isAMovie = movies?.length > 0

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form action="" className='form'>
          <input placeholder="Avengers, Star wars, The matrix" />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {
          isAMovie ? (
            <ul>
              {
                movies.map(movie => (
                  <li key={movie.imdbID}>
                    <h1>{movie.Title}</h1>
                    <p>{movie.Type}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                ))
              }
            </ul>
          ) : (
            <p>Busqueda fallida de la pelicula</p>
          )
        }
      </main>
      
    </div>
  )
}

