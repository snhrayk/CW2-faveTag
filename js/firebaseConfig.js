const firebaseConfig = {
  apiKey: "AIzaSyAT0Nsg_Q-QLrs_c5UaPn2KXZPze1pwghE",
  authDomain: "favetag-98729.firebaseapp.com",
  projectId: "favetag-98729",
  storageBucket: "favetag-98729.appspot.com",
  messagingSenderId: "1067167602538",
  appId: "1:1067167602538:web:0a080975c3d02fe4b1b713",
  measurementId: "G-119TFQQ9K9",
};

firebase.initializeApp(firebaseConfig);

// Create a new instance of the Google provider
var provider = new firebase.auth.GoogleAuthProvider();

// Authenticate with Firebase using the Google provider object
function googleLogin() {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      console.log(result);
      console.log("Success.. Google Account Linked");
    })
    .catch(function (error) {
      console.log(error);
      console.log("Failed to do");
    });
}
