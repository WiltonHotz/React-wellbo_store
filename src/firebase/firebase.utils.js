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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`) // use ref documentRef for CRUD

  const snapShot = await userRef.get()
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase