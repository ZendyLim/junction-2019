var firebase = require("firebase");

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyD9KkFzAEzWMkwnYrev3tMXgqIoAI_wO78",
  authDomain: "waitwat-df0f4.firebaseapp.com",
  databaseURL: "https://waitwat-df0f4.firebaseio.com",
  projectId: "waitwat-df0f4",
  storageBucket: "waitwat-df0f4.appspot.com",
  messagingSenderId: "949762856265"
};
firebase.initializeApp(config);

var provider = new firebase.auth.FacebookAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
