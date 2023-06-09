import './App.css'
import { Movies } from './components/Movies'
import { useMovie } from './hooks/useMovie'
import { useCallback, useEffect, useRef, useState } from 'react'
import debounce from 'just-debounce-it'

function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstTime = useRef(true)

  useEffect(() => {
    
    if (isFirstTime.current) {
      isFirstTime.current = search === ''
      return
    }

    if (search === '') {
      setError('La barra de busqueda no debe estar vacia')
      return
    }

    if(search.length < 3) {
      setError('La busqueda debe contener mas de 3 carcteres')
      return
    }

    setError(null)

  }, [search])

  return { search, setSearch, error }
}

export default function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovie({ search, sort })

  const debounceSearchingMovies = useCallback(
    debounce(search => {
    getMovies({ search})
  }, 300), [])

 const handleSubmit = (event) => {
  event.preventDefault()
  getMovies({search})
 }

 const handleSort = () => {
  setSort(!sort)
 }

 const handleChange = (event) => {
  const newSearching = event.target.value 
  setSearch(newSearching)
  debounceSearchingMovies(newSearching)
 }
 
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form action="" onSubmit={handleSubmit} className='form'>

          <input onChange={handleChange} value={search} name='movie1' placeholder="Avengers, Star wars, The matrix" />
          <input type='checkbox' onChange={handleSort} checked={sort}/>
          <button type='submit'>Buscar</button>

        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        { loading ? <p>Cargando...</p> : <Movies movies={movies}/> }
      </main>

    </div>
  )
}

