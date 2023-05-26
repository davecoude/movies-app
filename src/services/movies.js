const API_KEY = 'b39a67bf'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search
    // evitar contrato con la API directamente en la UI
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      type: movie.Type,
      year: movie.Year,
      poster: movie.Poster
    }))

  } catch (e) {
    throw new Error('Error Searching Movie')
  }
}