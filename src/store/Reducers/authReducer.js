const initState={
  authError:null
}

export  const authReducer=(state=initState,action)=>{
  switch(action.type){
    case 'LOGIN_SUCCESS':
     // console.log('login success')
      return{
        ...state,
        authError:null
      }
    case 'LOGIN_ERROR':
     // console.log('login error')
      return{
      ...state,
     authError:action.err.message
      }
      case 'LOGOUT_SUCCESS':
     // console.log('logOUT success')
      return{
        ...state,
        authError:null
      }
    case 'LOGOUT_ERROR':
      //console.log('logOUT error')
      return{
      ...state,
      authError:'logOUT error'
      }
    case 'SIGNUP_SUCCESS':
        //console.log('SIGNUP SUCCESS   fuck you ')
        return{
        ...state,
        authError:null
        }
    case 'SIGNUP_ERROR':
         // console.log('SIGNUP error',action.err12)
          return{
          ...state,
          authError:action.err12.message
          }
      case 'SUCESS_SEND_LINK':
       // console.log('SUCESS_SEND_LINK')
        return{
        ...state,
        authError:null
        }
      case 'UNSUCESS_SEND_LINK':
         // console.log('unsSUCESS_SEND_LINK',action.err.message)
          return{
          ...state,
          authError:action.err.message
          }
      default :
       return state
  }
  // console.log('success')
  // return state
}