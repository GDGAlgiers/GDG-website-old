import * as firebase from "firebase/app"
import "firebase/firestore"

const config = {
  apiKey: process.env.GATSBY_apiKey,
  authDomain: process.env.GATSBY_authDomain,
  databaseURL: process.env.GATSBY_databaseURL,
  projectId: process.env.GATSBY_projectId,
  storageBucket: process.env.GATSBY_storageBucket,
  messagingSenderId: process.env.GATSBY_messagingSenderId,
  appId: process.env.GATSBY_appId,
}
firebase.initializeApp(config)
export const database = firebase.firestore()
export const timestamps = firebase.firestore.FieldValue.serverTimestamp
