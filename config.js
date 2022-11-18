import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCl78JfqcaMVgIoU0a_6IVKBXham6YxZjk",
    authDomain: "complain-forum-88083.firebaseapp.com",
    projectId: "complain-forum-88083",
    storageBucket: "complain-forum-88083.appspot.com",
    messagingSenderId: "788143512398",
    appId: "1:788143512398:web:ee28efeeaa8fcbc55c9c1f"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
