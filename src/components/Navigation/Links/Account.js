import React, { Component } from 'react'
//import { withProtectRoute } from '../../session/index'
import { connect } from 'react-redux'
import { createAccount} from '../../../store/actions/projectActionCreator'
class Account extends Component {
    state={
        fname:"",
        lname:"",
        email:"",
        phn:"",
        add:""
    }

   handleChange=(e)=>{
       this.setState({
           [e.target.id]:e.target.value
       })
   }
   handleSubmit=(e)=>{
       console.log(this.state);
       e.preventDefault();

       this.props.createAccount(this.state)
   }

    render() {
        //console.log(this.props)
        return (
            <div className='container'>
                <div className='row'>
                     <div className='col l8 s6'>
                        <div className="card " style={{padding:"10px 30px 30px"}}>
                             <form onSubmit={this.handleSubmit}>
                                <div className='input-field'>
                                    <label htmlFor='fname'>First Name</label>
                                    <input id='fname' type='text' onChange={this.handleChange} />
                                </div>
                                <div className='input-field'>
                                    <label htmlFor='lname'>last Name</label>
                                    <input id='lname' type='text' onChange={this.handleChange} />
                                </div>
                                <div className='input-field'>
                                    <label htmlFor='email'>Email</label>
                                    <input id='email' type='email' onChange={this.handleChange} />
                                </div>
                                <div className='input-field'>
                                    <label htmlFor='phn'>Phone Number</label>
                                    <input id='phn' type='tel' onChange={this.handleChange} />
                                </div>
                                <div className='input-field'>
                                    <label htmlFor='add'>Address</label>
                                    <textarea id="add" className="materialize-textarea" onChange={this.handleChange} ></textarea>
                                </div>
                                <div>
                                    <button type='submit' className='btn'>Submit</button>
                                </div>
                             </form>
                        </div>  
                    </div>
                   
                           
                     
                     
                   </div>
                    
                
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        //add to props and dipatch when in props createAccount is called
      createAccount:(account)=>dispatch(createAccount(account))
    }
}

//const condition = authUser => !!authUser;
//export default withProtectRoute(condition)(Account)
export default connect(null,mapDispatchToProps)(Account)
//export default Account