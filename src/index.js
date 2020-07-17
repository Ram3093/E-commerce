import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { FirebaseContext,Firebase } from './firebase/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootreducer from './store/Reducers/rootReducer'
import  thunk  from 'redux-thunk'
import firebase from 'firebase/app';
// firebase store enchancer or provide firebase and firestore using redux 
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import fbconfig from './firebase/Firebase'

import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';

const store=createStore(rootreducer,applyMiddleware(thunk));

const rrfConfig={
   userProfile:"users",
   useFirestoreForProfile:true,
   enableRedirectHandling: false,
    resetBeforeLogin: false
}

const newConfig=Object.assign(fbconfig,rrfConfig)

const rrfProps = {
   firebase,
   config: newConfig,
   dispatch: store.dispatch,
   createFirestoreInstance,
   //config: fbCconfig
 };

 function AuthIsLoaded({ children }) {
   const auth = useSelector(state => state.firebase.auth)
   if (!isLoaded(auth)) return <div>Loading Screen...</div>;
       return children
 }
 
 


ReactDOM.render(
   
   <Provider store={store} >
        <ReactReduxFirebaseProvider {...rrfProps}> 
        {/* <App /> */}
                  <AuthIsLoaded><App /> </AuthIsLoaded>
         </ReactReduxFirebaseProvider>
    </Provider>
  ,
   document.getElementById('root')
);

// ReactDOM.render(<Provider store={store}> 
//    <ReactReduxFirebaseProvider {...rrfProps}> 
//          <AuthIsLoaded><App /> </AuthIsLoaded>
//    </ReactReduxFirebaseProvider>
// </Provider>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
