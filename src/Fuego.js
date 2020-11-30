import firebase from "firebase/app"
// import { Fuego } from "@nandorojo/swr-firestore"

// La versione originale in typescript faceva problemi
class Fuego {
  constructor(config) {
    this.db = !firebase.apps.length
      ? firebase.initializeApp(config).firestore()
      : firebase.app().firestore()
    this.auth = firebase.auth
    this.functions = firebase.functions
    this.storage = firebase.storage
  }
}

// Già che ci siamo, nascondiamo il config qua
export const firebaseConfig = {
  apiKey: "AIzaSyCm3QjMaz_W8EP7IywDhRx7ABvRVkXVjI8",
  authDomain: "giochi-mensa.firebaseapp.com",
  databaseURL: "https://giochi-mensa.firebaseio.com",
  projectId: "giochi-mensa",
  storageBucket: "giochi-mensa.appspot.com",
  messagingSenderId: "1062335221733",
  appId: "1:1062335221733:web:ca83aa214efee63c5e690c",
}

export default Fuego
