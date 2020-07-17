import React, { Component } from 'react'
//import { provideFirebase } from '../../../firebase/index'
import { Link , Redirect} from 'react-router-dom'
import * as Routes from '../../../constant/routes'
import { signUp } from '../../../store/actions/authActionCreator'
import { connect } from 'react-redux'

//import { firestore } from '../../../firebase/Firebase'
//import firebase from 'firebase/app'
//import { db } from '../../../firebase/Firebase'

// const SignUpPage=()=>(
//     <div>
//         <SignUpForm />
//     </div>
// )
 class SignUpBase extends Component {
     state={
         email:'',
         password:'',
        //  fname:'',
        //  lname:'',
         error:''
     }
     handleChange=(e)=>{
         this.setState({
             [e.target.id]:e.target.value
         })
     }
     handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.props)
        this.props.signUp(this.state)
       
       // this.props.history.push(Routes.landing) 
        //  const { email,password,fname,lname }= this.state;
        //  const firestore=firebase.firestore()
       
      
        // //  this.props.firebase.doCreateUserWithEmailAndPassword(email,password)
        //     firebase.auth().createUserWithEmailAndPassword(email,password)
        //        .then((resp)=>{
        //                  const add=firestore.collection('users1').doc(resp.user.uid);
        //                     return add.set({
        //                        fname:fname,
        //                        lname:lname,
        //                        initials:fname[0]+lname[0]
        //                       })
        //                 })
        //                 .then(authUser=>{this.setState({...this.state})  })
        //                                //   this.props.history.push(Routes.landing)  })
        //                 .catch((error)=>{this.setState({error:error})    }) 
        //       //console.log(error)
            
     }
    render() {
        const { authError,auth } =this.props
        //console.log(authError)
        if (auth.uid){return   <Redirect to='/' />    }  
        return (
            <div>
                 <div className='container'>
                    <div className="row"  style={{padding:"0 250px"}}>
                           <form className="col s12 card z-depth-1" style={{textAlign:"center", padding:'0 50px',}} onSubmit={this.handleSubmit}>
                              <div className="row ">
                                    <h3 className='' style={{ color:"#1f4068",fontWeight:"bolder"}}>Register Here !!!</h3>
                                    <div className="input-field col s12">
                                      <input id="email" type="email" className="validate" onChange={this.handleChange} />
                                      <label htmlFor="email">Email</label>
                                    </div>

                                     <div className="input-field col s12">
                                         <input id="password" type="password" className="validate"  onChange={this.handleChange}  />
                                         <label htmlFor="password">Password</label>
                                     </div>

                                     {/* <div className="input-field col s12">
                                         <input id="fname" type="text" className="validate"  onChange={this.handleChange}  />
                                         <label htmlFor="fname">Firstname</label>
                                     </div>

                                    <div className="input-field col s12">
                                         <input id="lname" type="text" className="validate"  onChange={this.handleChange}  />
                                         <label htmlFor="lname">Lastname</label>
                                     </div> */}

                                    <button className='btn  z-depth-1' style={{ backgroundColor:"#1f4068",fontWeight:"bolder",letterSpacing:"3px",textTransform:"lowercase"}} ><span style={{textTransform:"uppercase"}}>R</span>egister</button>
                                    <div className='red-text center'>
                                             { authError ? <p style={{ fontSize:"20px"}}>{authError}</p>:null }
                                             
                                       </div>
                             </div>
                           </form>
                           <h6 style={{textAlign:'center'}}>Already have an Account? <Link to={Routes.signIn} >Login</Link></h6>
                   </div>
                 </div>               
            </div>
        )
    }
}


const mapDataToProps=(state)=>{
    return({
      auth:state.firebase.auth  ,
   authError:state.auth.authError
    })
}

const mapDispatchDataToProps=(dispatch)=>{
    return{
        signUp:newUser=> dispatch(signUp(newUser) )   
    }
}
// const dispatchDataToProps=(dispatch)=>{
//     // console.log('dispatch')
//      return({
//          SignInAction:(cred)=>  dispatch(SignIn(cred))   
//      })
//  }
 

//const SignUpForm=withRouter(provideFirebase(SignUp))
//const SignUpForm=connect(mapDataToProps,mapDispatchDataToProps)(SignUpBase)

//export default SignUpPage
export default connect(mapDataToProps,mapDispatchDataToProps)(SignUpBase)
