  import * as firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';
  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAGVjjI1Z2dFSol0baZ623AH0qUiLi-BeY",
    authDomain: "firegram-bb453.firebaseapp.com",
    projectId: "firegram-bb453",
    storageBucket: "firegram-bb453.appspot.com",
    messagingSenderId: "576556071051",
    appId: "1:576556071051:web:fac4e6255ae307338fbc8e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };
