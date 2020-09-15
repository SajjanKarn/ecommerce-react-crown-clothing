import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYZuwAyjmIT0MNgUmRHdCJ9qvRDAGytmc",
  authDomain: "crwn-clothing-a59ab.firebaseapp.com",
  databaseURL: "https://crwn-clothing-a59ab.firebaseio.com",
  projectId: "crwn-clothing-a59ab",
  storageBucket: "crwn-clothing-a59ab.appspot.com",
  messagingSenderId: "418535846487",
  appId: "1:418535846487:web:3c92f71a37eef2a09d6912",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const saveUserInDatabase = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // if user doesn't exits let's create...
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error) {
      console.log(error.message)
    }
  }

  // return userRef for the later use....
  return userRef;

}

export default firebase;
