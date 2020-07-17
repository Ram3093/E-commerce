import firebase from 'firebase/app'
import 'firebase/firestore'
//const firestore=firebase.firestore()
//signIn section

export const SignIn=(cred)=>{
   return (dispatch,getState)=>{
       firebase.auth().signInWithEmailAndPassword(cred.email,cred.password)
       .then((res)=>{    dispatch(   {type:'LOGIN_SUCCESS'}  )   }    )
       .catch((err)=>{dispatch( { type:'LOGIN_ERROR',err }  )   }    )
    //dispatch(   {type:'LOGIN_SUCCESS'}  ) 
   }

}



//signout section

export const signout=()=>{
    return (dispatch,getState)=>{
        firebase.auth().signOut()
        .then(()=>{         dispatch(   {type:'LOGOUT_SUCCESS'}  )              })
        .catch((err)=>{      dispatch(   {type:'LOGOUT_ERROR',err}  )                })
    }
}



//sign up section

//  Sign up section 

export const signUp=(newUser)=>{
    
    return(dispatch,getState)=>{
   //  const firestore=firebase.firestore()
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password)
    //     ).then((resp)=>{
    //        // console.log('check',firestore.collection('users').doc(resp.user.uid).set({  firstName:newUser.firstName,    lastName:newUser.lastName,        }))
    //        return firestore.collection('users').doc(resp.user.uid).set({
    //         //    firstName:newUser.firstName,
    //         //    lastName:newUser.lastName,
    //         //    initials:newUser.firstName[0]+newUser.lastName[0]
    //            firstName:newUser.fname,
    //            lastName:newUser.lname, 
    //            initials:newUser.fname[0]+newUser.lname[0]
    //        })
    //    })
        .then(()=>{dispatch(  {type:'SIGNUP_SUCCESS'}   )
     }).catch((err12)=>{dispatch({type:'SIGNUP_ERROR' , err12 })})
    }
 }

// forgoot password section
export const passwordForget=(data)=>{
   return (dispatch,getState)=>{
                   firebase.auth().sendPasswordResetEmail(data.email)
                   .then((resp)=>{
                                 dispatch({type:"SUCESS_SEND_LINK"})
                   }).catch((err)=>{
                    dispatch({type:"UNSUCESS_SEND_LINK",err})
                   })
   }
    

}


// export const signUp=(newUser)=>{
//     return(dispatch,getState)=>{
//         const firestore=firebase.firestore()
//         firebase.auth().createUserWithEmailAndPassword(newUser.email,
//             newUser.password).then((resp)=>{
           
//             return firestore.collection('users123').doc(resp.user.uid).set({
//                    firstName:newUser.fname,
//                    lastName:newUser.lname,
//                    initials:newUser.fname[0]+newUser.lname[0]
//               // console.log('in fuck return ')
//                })
//            }).then(()=>{ dispatch({ type:'SIGNUP_SUCCESS'})
//             }).catch((err)=>{ dispatch({ type:"SIGNUP_ERROR",err})})
      
//     }
// }

// export const signUp=(newUser)=>{
    
//     return(dispatch,getState)=>{
//      const firestore=firebase.firestore()
//         firebase.auth().createUserWithEmailAndPassword(
//             newUser.email,
//             newUser.password
//         ).then((resp)=>{
//             console.log('firestore is',firestore)
//         console.log('firestore with collection is',firestore.collection('users'))
//         console.log('firestore  with collection with doc is',firestore.collection('users').doc(resp.user.uid))
//         console.log('firestore is',firestore.collection('users').doc(resp.user.uid).set({   fname:newUser.fname,lname:newUser.lname}))
        
//         console.log('firestore is',firestore)
//            return  ( firestore.collection('users').doc(resp.user.uid).set({
//                fname:newUser.fname,
//                lname:newUser.lname,
//                initials:newUser.fname[0]+newUser.lname[0]
//               }))
        

//         }).then(()=>{dispatch({type:'SIGNUP_SUCCESS'})
//      }).catch((err12)=>{dispatch({type:'SIGNUP_ERROR' , err12 })})
//     }
//  }


// export const signIn=(credentials)=>{
//     return(dispatch,getState)=>{
//     firebase.auth().signInWithEmailAndPassword(
//         credentials.email,
//         credentials.password
//     )
//     .then(()=>{dispatch({type:'LOGIN_SUCCESS'})})
//     .catch((err)=>{dispatch({type:'LOGIN_ERROR', err})})
//     }
//   }
