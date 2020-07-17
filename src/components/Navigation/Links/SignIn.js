import React, { Component } from 'react'
import { Link,withRouter, Redirect } from 'react-router-dom'
import * as Routes from '../../../constant/routes'
// signin is a action creator from redux
import { SignIn } from '../../../store/actions/authActionCreator'
import { connect } from 'react-redux'

const SignInPage=()=>(
    <div>
        <SignInForm />
    </div>
)
class SignInBase extends Component {
    state={
        email:'',
        password:'',
        error:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        // const { email,password }=this.state
        e.preventDefault();
        console.log(this.state,this.props)
        this.props.SignInAction(this.state)
        
        // this.props.firebase
        //    .doSignInWithEmailAndPassword(email,password)
        //      .then(()=>{this.setState({...this.state});
        //                 this.props.history.push(Routes.landing)
        //     })
        // //    .catch((error)=>{this.setState({error})})
        //    .catch((error)=>{this.setState({error:error})})
            
    }
    render() {
        const { authError ,auth }=this.props
        if (auth.uid){return   <Redirect to='/' />    } 
        return (
            <div>
                 <div className='container'>
                    <div className="row" style={{padding:"0 250px"}}>
                           <form className="col s12 card z-depth-1" style={{textAlign:"center", padding:'0 50px',}} onSubmit={this.handleSubmit}>
                              <div className="row ">
                                    <h3 className='' style={{padding:'0',margin:'0',color:"#1f4068",fontWeight:"bolder"}}>Log In</h3>
                                    <div className="input-field col s12">
                                      <input id="email" type="email" className="validate" onChange={this.handleChange} />
                                      <label htmlFor="email">Email</label>
                                    </div>

                                     <div className="input-field col s12">
                                         <input id="password" type="password" className="validate"  onChange={this.handleChange}  />
                                         <label htmlFor="password">Password</label>
                                     </div>
                                      <button className='btn  z-depth-1' style={{backgroundColor:"#1f4068",fontWeight:"bolder",letterSpacing:"3px"}}>Login</button>
                                     <br />  <br />
                                      <Link to={Routes.forgetPassword} className='text-blue darken-6'  >Forgot password</Link>
                                      { authError &&  <p className='red-text darken-6' style={{fontSize:"2rem"}}>{ authError }</p> }
                             </div>
                           </form>
                           <h6 style={{textAlign:'center'}}>Don't have account? <Link to={Routes.signUp} >SignUp</Link></h6>
                   </div>
                 </div>               
            </div>
        )
    }
}

const mapDataToProps=(state)=>{

   // console.log(state)
  return{
      authError:state.auth.authError,
      auth:state.firebase.auth
  }
}

const dispatchDataToProps=(dispatch)=>{
   // console.log('dispatch')
    return({
        SignInAction:(cred)=>  dispatch(SignIn(cred))   
    })
}

const SignInForm=withRouter(connect(mapDataToProps,dispatchDataToProps)(SignInBase))

export default SignInPage
