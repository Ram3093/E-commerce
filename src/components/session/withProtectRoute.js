import React from 'react'
import { withRouter } from 'react-router-dom'
import { provideFirebase } from '../../firebase/Context'
import * as Routes from '../../constant/routes'
import  AuthUserContext  from './context'

const withProtectRoute=(condition)=>Component=>{
    class WithProtectRoute extends React.Component{
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
              authUser => {
                if (!condition(authUser)) {
                  this.props.history.push(Routes.signIn);
                }
              },
            );
          }
       
          componentWillUnmount() {
            this.listener();
          }
        render(){
            return(
                <AuthUserContext.Consumer>
                {authUser =>
                  condition(authUser) ? <Component {...this.props} /> : null
                }
               </AuthUserContext.Consumer>
            ) 
        }
    }
    return withRouter(provideFirebase(WithProtectRoute))
}
export default withProtectRoute