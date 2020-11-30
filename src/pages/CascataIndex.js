import { Link } from "@reach/router"
import { useCollection } from "@nandorojo/swr-firestore"

const useCascataGames = () => {
  const { data, error } = useCollection(`cascata`)

  return {
    games: data,
    isLoading: !error && !data,
    isError: error,
  }
}

const CascataIndex = () => {
  return (
    <div>
      <p>
        La Cascata di Lettere è uno schema diviso in due metà. L'obiettivo è far
        cadere colonna per colonna le lettere della metà superiore nella stessa
        colonna della metà inferiore, in modo da leggere una frase. A volte
        vengono indicati gli spazi tra le parole o i segni di interpunzione, a
        volte no.
      </p>
      <h2>Giochi</h2>
      <CascataGames />
    </div>
  )
}

const CascataGames = () => {
  const { games, isLoading, isError } = useCascataGames()

  if (isLoading) return <CascataLoading />
  if (isError) return <CascataGamesError error={isError} />
  return (
    <ul>
      {games.map(game => (
        <li key={game.id}>
          <Link to={game.id}>{game.id}</Link>
        </li>
      ))}
    </ul>
  )
}

const CascataLoading = props => <div>Loading...</div>
const CascataGamesError = props => <div>Error :( {props.error.message}</div>

export default CascataIndex
