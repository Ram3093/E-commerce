import React from 'react';
import { connect } from 'react-redux'
 import { signout } from '../../../store/actions/authActionCreator'
import { withRouter } from 'react-router-dom'
import * as Routes from '../../../constant/routes'

const SignOutButton = (props) => {
  // console.log(props)
   const logout=()=>{
      props.signOut();
      console.log(props)
      props.history.push(Routes.landing)
    }
    //console.log(props)
   return(
   <p   style={{margin:"0 30px 0 0",padding:"0", cursor:"pointer"}}   onClick={  logout  }>
    <i className="fas fa-sign-out-alt" style={{fontSize:"20px"}}>&nbsp;&nbsp;Logout</i>
  </p>)
};
 

const mapdispatchToprops=(dispatch)=>{
  return({
    signOut:()=>dispatch(signout())
  })
}


export default withRouter(connect(null,mapdispatchToprops)(SignOutButton));