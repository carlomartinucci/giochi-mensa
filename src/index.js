import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { Router } from "@reach/router"
import routes, { renderRoutes } from "./routes"

import "firebase/firestore"
import "firebase/auth"
import { FuegoProvider } from "@nandorojo/swr-firestore"
import Fuego, { firebaseConfig } from "./Fuego"

import "./index.css"

import store from "./globalStore"
import * as serviceWorker from "./serviceWorker"

const fuego = new Fuego(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <FuegoProvider fuego={fuego}>
      <Provider store={store}>
        <Router>{renderRoutes(routes)}</Router>
      </Provider>
    </FuegoProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
