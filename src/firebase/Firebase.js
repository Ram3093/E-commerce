import firebase from 'firebase/app'
import 'firebase/auth'
import "firebase/firestore"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyAPgxRN7BB9PkKv4NVBwZxwFjXNktQcYVo",
    authDomain: "e-commerce-df27b.firebaseapp.com",
    databaseURL: "https://e-commerce-df27b.firebaseio.com",
    projectId: "e-commerce-df27b",
    storageBucket: "e-commerce-df27b.appspot.com",
    messagingSenderId: "40847402922",
    appId: "1:40847402922:web:fb74c744d60b96ba1eadd3"
  }; 
 
 
 const firebase1=firebase.initializeApp(firebaseConfig);
 export const db=firebase1.firestore()
//   class Firebase {
//       constructor(){
//         app.initializeApp(firebaseConfig);
//         this.auth = app.auth();
        
//       }
//       doCreateUserWithEmailAndPassword = (email, password) =>
//            this.auth.createUserWithEmailAndPassword(email, password);
 
//       doSignInWithEmailAndPassword = (email, password) =>
//            this.auth.signInWithEmailAndPassword(email, password);
 
//       doSignOut = () => this.auth.signOut();
 
//       doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
//       doPasswordUpdate = password =>
//             this.auth.currentUser.updatePassword(password);
//      user=()=>{}
      
          
//       }


export default firebase;


  