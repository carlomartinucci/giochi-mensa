import { Link } from "@reach/router"

const CascataIndex = () => (
  <div>
    <p>
      La Cascata di Lettere è uno schema diviso in due metà. L'obiettivo è far
      cadere colonna per colonna le lettere della metà superiore nella stessa
      colonna della metà inferiore, in modo da leggere una frase. A volte
      vengono indicati gli spazi tra le parole o i segni di interpunzione, a
      volte no.
    </p>
    <h2>Giochi</h2>
    <ul>
      <li>
        <Link to="c1">1</Link>
      </li>
      <li>
        <Link to="c2">2</Link>
      </li>
      <li>
        <Link to="c3">3</Link>
      </li>
    </ul>
  </div>
)

export default CascataIndex
