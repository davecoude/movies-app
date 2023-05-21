function ListOfMovies (movies) {
  return (
    <ul>
      {
        movies.map(itemMovie => (
          <li key={itemMovie.id}>
            <h1>{itemMovie.title}</h1>
            <p>{itemMovie.type}</p>
            <img src={itemMovie.poster} alt={itemMovie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoResultsMovies () {
  return (
    <p>Busqueda fallida de la pelicula</p>
  )
}

export function Movies ({ movies }) {
  const isAMovie = movies?.length > 0 // true or false
  
  return (
    isAMovie ?
    ListOfMovies(movies) : 
    NoResultsMovies()
  )
}