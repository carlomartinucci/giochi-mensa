import { Link } from "@reach/router"

const Home = () => (
  <>
    <p>
      Giochi del Mensa! A cura di Alberta Sestito. Realizzazione tecnica di
      Carlo Martinucci.
    </p>
    <h2>Categorie</h2>
    <ul>
      <li>
        <Link to="/cascata">Cascata di Lettere</Link>
      </li>
    </ul>
  </>
)

export default Home
