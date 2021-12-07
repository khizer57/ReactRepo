// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5jGhmv-75JgoopJ03vA0rR9OpNJmiNdM",
  authDomain: "hackathonsaims.firebaseapp.com",
  databaseURL: "https://hackathonsaims-default-rtdb.firebaseio.com",
  projectId: "hackathonsaims",
  storageBucket: "hackathonsaims.appspot.com",
  messagingSenderId: "1076572959669",
  appId: "1:1076572959669:web:f0bcfb8433cf6914a25ffc",
  measurementId: "G-P8868CFXRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

let userLogin = (obj, navigate) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        let uid = user.uid;
        dispatch({
          type: "LOGINDATA",
          uid,
        });
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
};

let signUp = (obj, navigate) => {
  console.log(obj)
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        let uid = user.uid;
        dispatch({
          type: "SIGNUPDATA",
          uid,
        });
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
};


export { userLogin, signUp};
