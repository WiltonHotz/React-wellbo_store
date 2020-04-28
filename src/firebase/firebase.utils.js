import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBQdLF4hs5eI0W2Orc_fpe--BKpLhf-2uQ",
  authDomain: "wellbo-store-db.firebaseapp.com",
  databaseURL: "https://wellbo-store-db.firebaseio.com",
  projectId: "wellbo-store-db",
  storageBucket: "wellbo-store-db.appspot.com",
  messagingSenderId: "1091944781450",
  appId: "1:1091944781450:web:c93f90cc8588c439eabf73"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase