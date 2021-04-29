import * as firebase from "firebase/app"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyDHvUgtFKq-XOJV2C2TVviC-U_uTq2fQK4",
  appId: "1:634654400534:web:bcc04c52eb6ff2916d9537",
  authDomain: "gdg-wtm-website.firebaseapp.com",
  databaseURL: "https://gdg-wtm-website.firebaseio.com/",
  messagingSenderId: "634654400534",
  projectId: "gdg-wtm-website",
  storageBucket: "gdg-wtm-website.appspot.com",
}
firebase.initializeApp(config)
export const database = firebase.firestore()
export const timestamps = firebase.firestore.FieldValue.serverTimestamp