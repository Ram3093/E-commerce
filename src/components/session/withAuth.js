import React from 'react'
import AuthUserContext from './context'
import { provideFirebase } from '../../firebase/Context'
const withAuth=Component=>{
    class WithAuth extends React.Component{
        state={
            authUser:null
        }
        componentDidMount(){
            this.listener=this.props.firebase.auth.onAuthStateChanged(authUser=>{
                authUser ? this.setState({authUser}):
                           this.setState({authUser:null})
            })
        }
        componentWillUnmount(){
            this.listener();
        }
        render(){
            return(
                <AuthUserContext.Provider value={this.state.authUser}>
                    {<Component {...this.props}    />  }
                </AuthUserContext.Provider>
            )
        }
    }
    return provideFirebase(WithAuth)
}

export default withAuth