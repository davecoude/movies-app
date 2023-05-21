import withAnswer from '../mocks/answer.json'
// import withoutAnswer from '../no-answer.json'

export function useMovie() {
  const movies = withAnswer.Search
  // evitar contrato con la API directamente en la UI
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    type: movie.Type,
    poster: movie.Poster
  }))

  return { movies: mappedMovies}
}