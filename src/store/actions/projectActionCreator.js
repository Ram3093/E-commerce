import firebase from 'firebase/app'
export const createAccount=(account)=>{
    return (dispatch,getState)=>{
        //async task
        firebase.firestore().collection('accounts').add({
             ...account,
             initials:'ram'
        }).then((res)=>{
            dispatch({type:"ACCOUNT_CREATED",account})
        }) 
        .catch((err)=>{
            dispatch({type:"ACCOUNT_CREATED_ERR",err})
        })

       // dispatch({type:"ACCOUNT_CREATED",account})
       
    }
}