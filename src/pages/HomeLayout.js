import { Link } from "@reach/router"

const HomeLayout = props => (
  <div>
    <nav>
      <h1>
        <Link to="/">I Giochi del Mensa</Link>
      </h1>
    </nav>

    <main>{props.children}</main>
  </div>
)

export default HomeLayout
