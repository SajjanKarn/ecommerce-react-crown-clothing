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

export default firebase;
