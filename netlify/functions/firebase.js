const firebase = require("firebase/app")
require("firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyDogYcPhDzLmzJ1QU7AAVNUDCAYRiusYkk",
  authDomain: "kiei-451-hw7-485b3.firebaseapp.com",
  projectId: "kiei-451-hw7-485b3",
  storageBucket: "kiei-451-hw7-485b3.appspot.com",
  messagingSenderId: "255489555888",
  appId: "1:255489555888:web:92efed037273f721f6aa75"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase