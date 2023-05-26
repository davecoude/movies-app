function ListOfMovies (movies) {
  return (
    <ul className="movie">
      {
        movies.map(itemMovie => (
          <li className="movie_item" key={itemMovie.id}>
            <h1>{itemMovie.title}</h1>
            <p>{itemMovie.type}</p>
            <p>{itemMovie.year}</p>
            <img src={itemMovie.poster} alt={itemMovie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoResultsMovies () {
  return (
    <p>No se encontraron resultados para la busqueda</p>
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