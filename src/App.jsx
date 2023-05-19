import './App.css'
import { Movies } from './components/Movies'
import { useMovie } from './hooks/useMovie'

export default function App () {
 const { movies } = useMovie()
 
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
        <Movies movies={movies}/>
      </main>

    </div>
  )
}

