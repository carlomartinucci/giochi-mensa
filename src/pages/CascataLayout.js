import React from "react"
import { Link } from "@reach/router"

const CascataLayout = props => (
  <div>
    <nav>
      <h1>
        <Link to="/">M</Link>
        <Link to="/cascata">Cascata di Lettere</Link>
      </h1>
    </nav>

    <main>{props.children}</main>
  </div>
)

export default CascataLayout
