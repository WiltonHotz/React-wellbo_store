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

  const snapShot = await userRef.get() // call snapShot.data() to get object
  
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

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {  // transform object with title as keys
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log(collectionRef)

  const batch = firestore.batch() // batch all data so we can fail all or accept all.
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit() // just do this once to add our collection data to firebase. See app.js for commented out code
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase