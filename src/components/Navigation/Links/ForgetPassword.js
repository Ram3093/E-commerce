import React, { Component } from 'react'
//import { provideFirebase } from '../../../firebase/Context'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { passwordForget} from '../../../store/actions/authActionCreator'
import * as Routes from '../../../constant/routes'

const ForgetPage=()=>(
    <div>
        <ForgetForm />
    </div>
)
 class ForgetPassword extends Component {
    state={
        email:'',
        error:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        this.props.forgetPassword(this.state)
         
        alert('A verification link is sent to your email address')
         this.props.history.push(Routes.signIn)

      //   const { email }=this.state
      //   this.props.firebase
      // .doPasswordReset(email)
      // .then(() => {
      //   this.setState({ ...this.state });
      //   alert('A verification link is sent to your email address')
      //   this.props.history.push(Routes.signIn)
      // })
      // .catch(error => {
      //   this.setState({ error });
      // });
 
    }
    render() {
        const { error }=this.props
        return (
            <div>
                 <div className='container'>
                    <div className="row" style={{padding:"0 250px"}}>
                           <form className="col s12 card z-depth-1" style={{textAlign:"center", padding:'0 50px',}} onSubmit={this.handleSubmit}>
                              <div className="row ">
                                    <h5 className='' style={{color:"#1f4068",fontWeight:"bolder",letterSpacing:"1px",padding:'10px',margin:'0',}}>Enter Your Email</h5>
                                    <div className="input-field col s12">
                                      <input id="email" type="email" className="validate" onChange={this.handleChange} />
                                      <label htmlFor="email">Email</label>
                                    </div>

                                      <button className='btn z-depth-1' style={{backgroundColor:"#1f4068",fontWeight:"bolder",letterSpacing:"1px",textTransform:"lowercase"}}><span style={{textTransform:"uppercase"}}>S</span>ubmit</button>
                                    
                             </div>
                             {error &&  <p className='red-text' style={{fontSize:"2rem"}}>{error}</p>}
                           </form>
                           
                          
                   </div>
                 </div>               
            </div>
        )
    }
}
const mapdataToprops=(state)=>{
  return{
      error:state.auth.authError,
      auth:state.firebase.auth
  }
}

const dispatchdataToprops=(dispatch)=>{
  return{
      forgetPassword:(data)=>{    dispatch(passwordForget(data))      }
  }
}


const ForgetForm=withRouter(connect(mapdataToprops,dispatchdataToprops)(ForgetPassword))

export default ForgetPage
